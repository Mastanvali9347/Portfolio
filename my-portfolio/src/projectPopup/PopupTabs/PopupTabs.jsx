import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function PopupTabs({ project }) {
  const tabs = ["Overview", "Tech Stack", "Details"]
  const [activeTab, setActiveTab] = useState("Overview")

  const renderContent = () => {
    if (activeTab === "Tech Stack") {
      return (
        <div>
          {project?.tech?.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      )
    }

    if (activeTab === "Details") {
      return <p>{project?.description}</p>
    }

    return <p>{project?.description}</p>
  }

  return (
    <div>
      <div>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PopupTabs