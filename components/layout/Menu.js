'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""

	return (
		<>
			<ul className="menu">
				<li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
					<Link href="#">Home</Link>
					<ul className="sub-menu">
						<li className={`item ${checkCurrentMenuItem("/")}`}>
							<Link href="//">Home 1</Link>
						</li>
						<li className={`item ${checkCurrentMenuItem("/home-02")}`}>
							<Link href="//home-02">Home 2</Link>
						</li>
					</ul>
				</li>
				<li className={`item ${pathname === "/about" ? "active" : ""}`}>
					<Link href="//about">about</Link>
				</li>
			</ul>
		</>
	)
}

