import { useState, useRef, useEffect } from 'react'
import '../styles/BeforeAfterSlider.css'

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  // Handle mouse down on slider
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  // Handle touch start on slider
  const handleTouchStart = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  // Calculate slider position based on mouse/touch position
  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return
      updateSliderPosition(e.clientX)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  // Handle touch move
  useEffect(() => {
    const handleTouchMove = (e) => {
      if (!isDragging) return
      e.preventDefault()
      const touch = e.touches[0]
      updateSliderPosition(touch.clientX)
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  // Handle container click
  const handleContainerClick = (e) => {
    if (e.target === sliderRef.current || e.target.closest('.slider-handle')) return
    updateSliderPosition(e.clientX)
  }

  return (
    <div 
      className="before-after-slider"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Before Image (Background) */}
      <div className="before-image">
        <img src={beforeImage} alt={beforeLabel} />
        <div className="image-label before-label">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="after-image"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterImage} alt={afterLabel} />
        <div className="image-label after-label">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div 
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className={`slider-handle ${isDragging ? 'dragging' : ''}`}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Drag to compare before and after images"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault()
              setSliderPosition(Math.max(0, sliderPosition - 5))
            } else if (e.key === 'ArrowRight') {
              e.preventDefault()
              setSliderPosition(Math.min(100, sliderPosition + 5))
            }
          }}
        >
          <div className="slider-arrows">
            <i className="bi bi-chevron-left"></i>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="slider-instructions">
        <span>Drag to compare</span>
      </div>
    </div>
  )
}

export default BeforeAfterSlider