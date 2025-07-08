'use client'
import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: document.querySelector(target).offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {hasScrolled && (
                <div  onClick={handleClick} style={{cursor: 'pointer'}} aria-label="Back to top">
                    {/* Removed 'Click' text. Add icon or leave empty for now. */}
                </div>

            )}
        </>
    )
}
