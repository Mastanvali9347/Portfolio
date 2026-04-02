import { useEffect, useCallback } from "react"
import { usePopup } from "../context/PopupContext"

export default function useProjectPopup() {
  const { activeProject, openPopup, closePopup } = usePopup()

  const handleOutsideClick = useCallback(
    e => {
      if (e.target.classList.contains("backdrop")) {
        closePopup()
      }
    },
    [closePopup]
  )

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden"
      document.addEventListener("click", handleOutsideClick)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [activeProject, handleOutsideClick])

  return { activeProject, openPopup, closePopup }
}