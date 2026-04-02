import { motion, AnimatePresence } from "framer-motion"
import { usePopup } from "../../context/PopupContext"
import PopupHeader from "../PopupHeader/PopupHeader"
import PopupGallery from "../PopupGallery/PopupGallery"
import PopupTabs from "../PopupTabs/PopupTabs"
import PopupActions from "../PopupActions/PopupActions"
import Backdrop from "../Backdrop/Backdrop"
import "./ProjectPopup.css"

export default function ProjectPopup() {
  const { activeProject, closePopup } = usePopup()

  return (
    <AnimatePresence>
      {activeProject && (
        <>
          <Backdrop onClick={closePopup} />

          <motion.div
            className="project-popup"
            initial={{ opacity: 0, scale: 0.7, rotateX: -20, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotateX: 20, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="popup-glow"></div>
            <PopupHeader
              title={activeProject.title}
              onClose={closePopup}
            />

            <PopupGallery project={activeProject} />

            <PopupTabs project={activeProject} />

            <PopupActions project={activeProject} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}