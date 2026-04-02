import { useEffect, useState } from "react"

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percentage = docHeight > 0
        ? (scrollTop / docHeight) * 100
        : 0

      setProgress(Math.min(100, Math.max(0, percentage)))
    }

    calculateProgress()
    window.addEventListener("scroll", calculateProgress)
    window.addEventListener("resize", calculateProgress)

    return () => {
      window.removeEventListener("scroll", calculateProgress)
      window.removeEventListener("resize", calculateProgress)
    }
  }, [])

  return progress
}
