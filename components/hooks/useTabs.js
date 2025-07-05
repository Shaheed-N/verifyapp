import { useEffect } from "react"

export function useTabs() {
	useEffect(() => {
		if (typeof document !== "undefined") {
			const tabs = document.querySelectorAll("ul.tabs-1 li")

			tabs.forEach((tab) => {
				tab.addEventListener("click", function () {
					const tabId = this.getAttribute("data-tab")

					// Remove 'current' class from all tabs and contents
					document.querySelectorAll("ul.tabs-1 li").forEach((t) => t.classList.remove("current"))
					document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("current"))

					// Add 'current' class to selected tab and corresponding content
					this.classList.add("current")
					document.getElementById(tabId)?.classList.add("current")
				})
			})

			// Cleanup event listeners on unmount
			return () => {
				tabs.forEach((tab) => {
					tab.replaceWith(tab.cloneNode(true))
				})
			}
		}
	}, [])
}
