import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0.18,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || inView) {
      return
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (media.matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setInView(true)

        if (once) {
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [inView, once, rootMargin, threshold])

  return { ref, inView }
}
