import React, { useState, useRef, useCallback, memo } from 'react'
import '../styles/BeforeAfterSlider.css'

const BeforeAfterSlider = memo(({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Simple position update
  const updateSliderPosition = useCallback((clientX) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  // Mouse handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }, [isDragging, updateSliderPosition])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    setIsDragging(true)
    // Don't prevent default here to avoid passive listener issues
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return
    // Remove preventDefault to avoid passive listener issues
    const touch = e.touches[0]
    updateSliderPosition(touch.clientX)
  }, [isDragging, updateSliderPosition])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Container click
  const handleContainerClick = useCallback((e) => {
    if (e.target.closest('.slider-handle-simple')) return
    updateSliderPosition(e.clientX)
  }, [updateSliderPosition])

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setSliderPosition(prev => Math.max(0, prev - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setSliderPosition(prev => Math.min(100, prev + 5))
    }
  }, [])

  // Global event listeners
  React.useEffect(() => {
    if (!isDragging) return

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div 
      className="before-after-simple"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Before Image (Background - always visible) */}
      <div className="before-image-simple">
        <img 
          src={beforeImage} 
          alt={beforeLabel}
          loading="lazy"
          decoding="async"
        />
        <div className="image-label-simple before-label-simple">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped using clip-path - but simpler) */}
      <div 
        className="after-image-simple"
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel}
          loading="lazy"
          decoding="async"
        />
        <div className="image-label-simple after-label-simple">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div 
        className="slider-line-simple"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className={`slider-handle-simple ${isDragging ? 'dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Drag to compare before and after images"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          <div className="slider-arrows-simple">
            <i className="bi bi-chevron-left"></i>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="slider-instructions-simple">
        <span>Drag to compare</span>
      </div>
    </div>
  )
})

BeforeAfterSlider.displayName = 'BeforeAfterSlider'

export default BeforeAfterSlider