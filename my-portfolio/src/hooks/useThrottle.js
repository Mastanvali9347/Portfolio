import { useRef, useCallback } from "react"

export default function useThrottle(fn, delay = 300) {
  const lastCall = useRef(0)
  const timeoutRef = useRef(null)

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now()

      if (now - lastCall.current >= delay) {
        lastCall.current = now
        fn(...args)
      } else {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          lastCall.current = Date.now()
          fn(...args)
        }, delay - (now - lastCall.current))
      }
    },
    [fn, delay]
  )

  return throttledFunction
}
