import { useState, useEffect, useRef } from 'react'

export default function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!options.once) {
          setIsInView(false)
        }
      },
      { threshold: 0.1, ...options }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.once, options.threshold])

  return [ref, isInView]
}