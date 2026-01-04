import React, { useState, useCallback, memo } from 'react'
import '../styles/BeforeAfterReveal.css'

const BeforeAfterReveal = memo(({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleToggle = useCallback(() => {
    setIsRevealed(prev => !prev)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsRevealed(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsRevealed(false)
  }, [])

  return (
    <div 
      className="before-after-reveal"
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Before Image (Background) */}
      <div className="before-image-reveal">
        <img 
          src={beforeImage} 
          alt={beforeLabel}
          loading="lazy"
          decoding="async"
        />
        <div className="image-label-reveal before-label-reveal">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Overlay) */}
      <div className={`after-image-reveal ${isRevealed ? 'revealed' : ''}`}>
        <img 
          src={afterImage} 
          alt={afterLabel}
          loading="lazy"
          decoding="async"
        />
        <div className="image-label-reveal after-label-reveal">
          {afterLabel}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="reveal-button">
        <i className={`bi ${isRevealed ? 'bi-eye-slash' : 'bi-eye'}`}></i>
        <span>{isRevealed ? 'Hide After' : 'Show After'}</span>
      </div>

      {/* Instructions */}
      <div className="reveal-instructions">
        <span>Hover or click to reveal</span>
      </div>
    </div>
  )
})

BeforeAfterReveal.displayName = 'BeforeAfterReveal'

export default BeforeAfterReveal