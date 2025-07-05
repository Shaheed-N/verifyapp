'use client'
import { useEffect } from "react"

export function useScroll() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				const scrollY = window.scrollY
				const nav = document.querySelector(".wsmainfull")

				if (nav) {
					if (scrollY > 80) {
						nav.classList.add("scroll")
					} else {
						nav.classList.remove("scroll")
					}
				}
			}

			window.addEventListener("scroll", handleScroll)
			return () => window.removeEventListener("scroll", handleScroll)
		}
	}, [])
}
