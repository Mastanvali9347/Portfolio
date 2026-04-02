import { createContext, useContext, useState, useCallback } from "react"

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null)

  const openPopup = useCallback(project => {
    setActiveProject(project)
    document.body.style.overflow = "hidden"
  }, [])

  const closePopup = useCallback(() => {
    setActiveProject(null)
    document.body.style.overflow = "auto"
  }, [])

  return (
    <PopupContext.Provider value={{ activeProject, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)