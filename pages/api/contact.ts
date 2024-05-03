import { MongoClient, ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

type NewMessageType = {
  email: string
  id?: ObjectId
  message: string
  name: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body

    if (!email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' })

      return
    }
    const newMessage: NewMessageType = {
      email,
      message,
      name,
    }
    let client

    try {
      client = await MongoClient.connect(
        'mongodb+srv://exleonardo:1239643k@cluster0.yfysi3d.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0'
      )
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to database.' })

      return
    }
    const db = client.db('my-blog')

    try {
      const result = await db.collection('messages').insertOne(newMessage)

      newMessage.id = result.insertedId
    } catch (e) {
      client.close()
      res.status(500).json({ message: 'Storing message failed' })

      return
    }

    client.close()
    res.status(201).json({ message: 'Successfully stored message!', messages: newMessage })
  }
}
