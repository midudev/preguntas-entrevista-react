import { useEffect } from 'react'

type UseEventListenerProps = {
  eventName: string
  handler: (event: Event) => void
}
export const useEventListener = ({
  eventName,
  handler,
}: UseEventListenerProps) => {
  useEffect(() => {
    window.addEventListener(eventName, handler)

    return () => {
      window.removeEventListener(eventName, handler)
    }
  }, [eventName, handler])

  return null
}
