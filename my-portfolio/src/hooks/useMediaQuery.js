import { useEffect, useState } from "react"

export default function useMediaQuery(query) {
  const getMatches = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const listener = event => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener("change", listener)

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}