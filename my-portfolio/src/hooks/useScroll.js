import { useEffect, useState } from "react"

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState("up")

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset
      setScrollY(currentScrollY)
      setDirection(currentScrollY > lastScrollY ? "down" : "up")
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", updateScroll)
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  return { scrollY, direction }
}