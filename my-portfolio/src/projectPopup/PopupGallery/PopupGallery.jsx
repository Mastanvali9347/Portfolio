import { useState } from "react"
import "./PopupGallery.css"

export default function PopupGallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  if (!images.length) return null

  return (
    <div className="popup-gallery">
      <div className="gallery-main">
        <img src={images[currentIndex]} alt="project" />
      </div>

      {images.length > 1 && (
        <div className="gallery-controls">
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  )
}