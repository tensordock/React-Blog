'use client'
import { useState, useEffect } from 'react'

const useTypewriter = (text, typingSpeed = 50, deletingSpeed = 50, delay = 1000) => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timer

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1))
          setCharIndex((prevIndex) => prevIndex - 1)
        } else {
          setIsDeleting(false)
          setIsPaused(true)
          timer = setTimeout(() => {
            setIsPaused(false)
            setCharIndex(0)
          }, delay)
        }
      } else {
        if (charIndex < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(charIndex))
          setCharIndex((prevIndex) => prevIndex + 1)
        } else {
          setIsDeleting(true)
          setIsPaused(true)
          timer = setTimeout(() => {
            setIsPaused(false)
          }, delay)
        }
      }
    }

    if (!isPaused) {
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timer = setTimeout(handleTyping, speed)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [text, typingSpeed, deletingSpeed, delay, isDeleting, charIndex, isPaused])

  return displayText
}

const Typewriter = ({ text, typingSpeed = 50, deletingSpeed = 50, delay = 500 }) => {
  const displayText = useTypewriter(text, typingSpeed, deletingSpeed, delay)

  return <p>{displayText}</p>
}

export default Typewriter
