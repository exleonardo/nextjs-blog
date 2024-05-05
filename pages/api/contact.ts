import process from 'process'

import { MongoClient, ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

type NewMessageType = {
  email: string
  id?: ObjectId
  message: string
  name: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; messages?: NewMessageType }>
) {
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
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.yfysi3d.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`

    try {
      client = await MongoClient.connect(connectionString)
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
