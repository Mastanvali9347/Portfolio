import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        root: null,
        rootMargin: "0px",
        ...options
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  }, [options])

  return { elementRef, isVisible }
}