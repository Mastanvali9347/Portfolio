import { useState, useEffect, useRef } from "react"

export default function useTypewriter(
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentWord = words[currentWordIndex] || ""

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
        if (displayText.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(
            () => setIsDeleting(true),
            delayBetweenWords
          )
          return
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setCurrentWordIndex(prev => (prev + 1) % words.length)
          return
        }
      }

      timeoutRef.current = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeoutRef.current)
  }, [
    displayText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords
  ])

  return displayText
}