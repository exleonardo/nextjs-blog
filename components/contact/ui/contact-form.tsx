import { FormEvent, useEffect, useState } from 'react'

import { Notification } from '@/components/notification'

import s from '../style/contact-form.module.scss'

type ContactDetail = {
  email: string
  message: string
  name: string
}
const sendContactData = async (contactDetails: ContactDetail) => {
  const response = await fetch(`api/contact`, {
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }
}

export const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState<'error' | 'pending' | 'success' | undefined>()
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const id = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(id)
    }
  }, [requestStatus])
  const sendMessageHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setRequestStatus('pending')
    try {
      await sendContactData({
        email: enteredEmail,
        message: enteredMessage,
        name: enteredName,
      })
      setRequestStatus('success')
      setEnteredMessage('')
      setEnteredEmail('')
      setEnteredName('')
    } catch (err) {
      setRequestError(err.message)
      setRequestStatus('error')
    }
  }
  let notification

  if (requestStatus === 'pending') {
    notification = {
      message: 'Your message is on its way!',
      status: 'pending',
      title: 'Sending message...',
    }
  }

  if (requestStatus === 'success') {
    notification = {
      message: 'Message sent successfully!',
      status: 'success',
      title: 'Success!',
    }
  }
  if (requestStatus === 'error') {
    notification = {
      message: requestError,
      status: 'error',
      title: 'Error!',
    }
  }

  return (
    <section className={s.contact}>
      <h1>How can i help you</h1>
      <form className={s.form} onSubmit={sendMessageHandler}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor={'email'}>Your Email</label>
            <input
              id={'email'}
              onChange={e => setEnteredEmail(e.currentTarget.value)}
              type={'email'}
              value={enteredEmail}
            />
          </div>
          <div className={s.control}>
            <label htmlFor={'name'}>Your Name</label>
            <input
              id={'name'}
              onChange={e => setEnteredName(e.currentTarget.value)}
              type={'text'}
              value={enteredName}
            />
          </div>
        </div>
        <div className={s.control}>
          <label htmlFor={'message'}>Your message</label>
          <textarea
            id={'message'}
            onChange={e => setEnteredMessage(e.currentTarget.value)}
            required
            rows={5}
            value={enteredMessage}
          />
        </div>
        <div className={s.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  )
}
