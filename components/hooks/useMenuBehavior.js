
'use client'
import { useEffect } from 'react'

const useMenuBehavior = () => {
	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth < 992) {
				// Select elements
				const menuItems = document.querySelectorAll('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li.h-link')
				const arrow = document.querySelector('.wsanimated-arrow')
				const subMenu = document.querySelectorAll('.sub-menu')
				const megaMenu = document.querySelectorAll('.wsmegamenu')
				const menuClick = document.querySelectorAll('.wsmenu-click')
				const menuClick02Icon = document.querySelectorAll('.wsmenu-click02 > i')

				// Event listener for menu items
				menuItems.forEach(item => {
					item.addEventListener('click', () => {
						// Close menus and remove classes
						document.body.classList.remove('wsactive')
						subMenu.forEach(menu => (menu.style.display = 'none'))
						megaMenu.forEach(menu => (menu.style.display = 'none'))
						menuClick.forEach(click => click.classList.remove('ws-activearrow'))
						menuClick02Icon.forEach(icon => icon.classList.remove('wsmenu-rotate'))
					})
				})

				// Event listener for arrow
				if (arrow) {
					arrow.addEventListener('click', () => {
						subMenu.forEach(menu => (menu.style.display = 'none'))
						megaMenu.forEach(menu => (menu.style.display = 'none'))
						menuClick.forEach(click => click.classList.remove('ws-activearrow'))
						menuClick02Icon.forEach(icon => icon.classList.remove('wsmenu-rotate'))
					})
				}
			}
		}

		handleWindowResize() // Initial call on mount
		window.addEventListener('resize', handleWindowResize) // Re-run on window resize

		return () => {
			window.removeEventListener('resize', handleWindowResize) // Clean up the event listener
		}
	}, [])
	useEffect(() => {
		const body = document.body
		const menuContainer = document.createElement('div')
		menuContainer.classList.add('wsmenucontainer')
		body.appendChild(menuContainer)

		const overlapBg = document.createElement('div')
		overlapBg.classList.add('overlapblackbg')
		const wsmenu = document.querySelector('.wsmenu')
		wsmenu.prepend(overlapBg)

		const handleResize = () => {
			const windowWidth = window.innerWidth
			if (windowWidth < 992) {
				const wsmenuHeight = window.innerHeight
				wsmenu.style.height = `${wsmenuHeight}px`
				menuContainer.style.minWidth = `${window.innerWidth}px`
			} else {
				wsmenu.removeAttribute('style')
				menuContainer.removeAttribute('style')
				body.classList.remove('wsactive')
				const menuItems = document.querySelectorAll('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu')
				menuItems.forEach(item => item.removeAttribute('style'))
				const menuClicks = document.querySelectorAll('.wsmenu-click')
				menuClicks.forEach(click => click.classList.remove('ws-activearrow'))
				const menuClick02Icons = document.querySelectorAll('.wsmenu-click02 > i')
				menuClick02Icons.forEach(icon => icon.classList.remove('wsmenu-rotate'))
			}
		}

		const toggleBodyClass = () => {
			body.classList.toggle('wsactive')
		}

		const closeMenu = () => {
			body.classList.remove('wsactive')
		}

		const handleClick = (event) => {
			const target = event.currentTarget
			target.classList.toggle('ws-activearrow')
			const siblings = Array.from(target.parentElement.parentElement.children).filter(child => child !== target.parentElement)
			siblings.forEach(sibling => sibling.querySelector('.wsmenu-click')?.classList.remove('ws-activearrow'))
			const subMenu = target.parentElement.querySelector('.sub-menu')
			const megaMenu = target.parentElement.querySelector('.wsmegamenu')
			if (subMenu) subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none'
			if (megaMenu) megaMenu.style.display = megaMenu.style.display === 'none' ? 'block' : 'none'
		}

		const handleClick02 = (event) => {
			const target = event.currentTarget
			target.querySelector('.wsmenu-arrow').classList.toggle('wsmenu-rotate')
			const subMenu = target.parentElement.querySelector('.sub-menu')
			if (subMenu) subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none'
		}

		const menuItems = document.querySelectorAll('.wsmenu > .wsmenu-list > li')
		menuItems.forEach(item => {
			if (item.querySelector('.sub-menu') || item.querySelector('.wsmegamenu')) {
				const menuClick = document.createElement('span')
				menuClick.classList.add('wsmenu-click')
				menuClick.innerHTML = '<i class="wsmenu-arrow"></i>'
				item.prepend(menuClick)
				menuClick.addEventListener('click', handleClick)
			}
		})

		const menuItems02 = document.querySelectorAll('.wsmenu > .wsmenu-list > li > ul > li')
		menuItems02.forEach(item => {
			if (item.querySelector('.sub-menu')) {
				const menuClick02 = document.createElement('span')
				menuClick02.classList.add('wsmenu-click02')
				menuClick02.innerHTML = '<i class="wsmenu-arrow"></i>'
				item.prepend(menuClick02)
				menuClick02.addEventListener('click', handleClick02)
			}
		})

		const navToggle = document.getElementById('wsnavtoggle')
		if (navToggle) {
			navToggle.addEventListener('click', toggleBodyClass)
		}

		overlapBg.addEventListener('click', closeMenu)

		window.addEventListener('resize', handleResize)
		handleResize() // Trigger resize logic on mount

		return () => {
			// Cleanup event listeners on unmount
			window.removeEventListener('resize', handleResize)
			if (navToggle) {
				navToggle.removeEventListener('click', toggleBodyClass)
			}
			overlapBg.removeEventListener('click', closeMenu)
		}
	}, [])
}

export default useMenuBehavior
