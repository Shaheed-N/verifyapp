'use client'
import { useEffect } from "react"

export function useCounterAnimation() {
	useEffect(() => {
		if (typeof document !== "undefined") {
			const elements = document.querySelectorAll(".count-element")

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const el = entry.target
							const targetValue = parseInt(el.textContent, 10)
							let start = 0
							const duration = 4000
							const increment = targetValue / (duration / 16)

							const animateCounter = () => {
								start += increment
								if (start >= targetValue) {
									el.textContent = targetValue
									observer.unobserve(el)
								} else {
									el.textContent = Math.ceil(start)
									requestAnimationFrame(animateCounter)
								}
							}

							animateCounter()
						}
					})
				},
				{ threshold: 0.5 } // Element should be at least 50% visible
			)

			elements.forEach((el) => observer.observe(el))

			return () => observer.disconnect() // Cleanup on unmount
		}
	}, [])
}
