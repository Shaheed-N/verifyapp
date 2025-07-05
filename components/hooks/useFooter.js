'use client'
import { useEffect } from "react"

export function useFooter() {
	useEffect(() => {
		if (typeof document !== "undefined") {
			const titles = document.querySelectorAll(".footer-links div h6.m-title")

			titles.forEach((title) => {
				title.addEventListener("click", function () {
					// Toggle 'expanded' class on clicked title
					if (this.classList.contains("expanded")) {
						this.classList.remove("expanded")
					} else {
						// Remove 'expanded' from other titles
						document.querySelectorAll(".footer-links h6.expanded").forEach((t) => t.classList.remove("expanded"))
						this.classList.add("expanded")

						// Hide all other dropdowns
						document.querySelectorAll(".foo-links").forEach((link) => {
							if (link !== this.nextElementSibling) {
								link.style.display = "none"
							}
						})
					}

					// Toggle the visibility of the current ul
					const ul = this.nextElementSibling
					if (ul && ul.tagName === "UL") {
						ul.style.display = ul.style.display === "block" ? "none" : "block"
					}
				})
			})

			// Cleanup to prevent duplicate event listeners
			return () => {
				titles.forEach((title) => {
					title.replaceWith(title.cloneNode(true))
				})
			}
		}
	}, [])
}
