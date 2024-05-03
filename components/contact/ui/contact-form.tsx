import { FormEvent, useState } from 'react'

import s from '../style/contact-form.module.scss'

export const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`api/contact`, {
      body: JSON.stringify({
        email: enteredEmail,
        message: enteredMessage,
        name: enteredName,
      }),
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    })
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
    </section>
  )
}
