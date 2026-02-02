interface FeedbackProps {
    message: string
    type?: 'success' | 'info'
  }
  
  export function Feedback({ message, type = 'info' }: FeedbackProps) {
    return (
      <div className={`feedback ${type}`}>
        {message}
      </div>
    )
  }