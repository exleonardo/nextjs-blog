import s from '../style/notification.module.scss'

type NotificationProps = {
  message: string
  status: string
  title: string
}
export const Notification = ({ message, status, title }: NotificationProps) => {
  let statusClasses = ''

  if (status === 'success') {
    statusClasses = s.success
  }

  if (status === 'error') {
    statusClasses = s.error
  }

  const cssClasses = `${s.notification} ${statusClasses}`

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}
