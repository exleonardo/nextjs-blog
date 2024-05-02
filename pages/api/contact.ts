import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, message, name } = req.body

    if (!email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' })

      return
    }
    const newMessage = {
      email,
      message,
      name,
    }

    res.status(201).json({ message: 'Successfully stored message!', messages: newMessage })
  }
}
