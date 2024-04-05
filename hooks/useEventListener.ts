import { useEffect } from 'react'

type UseEventListenerProps = {
  eventName: string;
  handler: (event: Event) => void;
};
export const useEventListener = ({
  eventName,
  handler
}: UseEventListenerProps) => {
  useEffect(() => {
    window.addEventListener(eventName, (event) => {
      handler(event)
    })

    return () => {
      window.removeEventListener(eventName, () => {})
    }
  }, [eventName, handler])

  return null
}
