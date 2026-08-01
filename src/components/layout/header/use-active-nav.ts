'use client'

import { useEffect, useState } from 'react'
import { navItems, type NavHref } from './nav-items'

export function useActiveNav () {
  const [activeHref, setActiveHref] = useState<NavHref>('#hero')

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        section: document.querySelector<HTMLElement>(item.href)
      }))
      .filter((item): item is { href: NavHref, section: HTMLElement } => item.section !== null)

    const setActiveFromHash = () => {
      const currentHash = window.location.hash

      if (navItems.some((item) => item.href === currentHash)) {
        setActiveHref(currentHash as NavHref)
        return true
      }

      return false
    }

    const setActiveFromScroll = () => {
      if (window.scrollY <= 8) {
        setActiveHref('#hero')
        return
      }

      const marker = window.scrollY + window.innerHeight * 0.38
      const activeSection = sections.findLast(({ section }) => section.offsetTop <= marker)

      if (activeSection !== undefined) {
        setActiveHref(activeSection.href)
      }
    }

    let ticking = false

    const handleScroll = () => {
      if (ticking) {
        return
      }

      ticking = true

      window.requestAnimationFrame(() => {
        setActiveFromScroll()
        ticking = false
      })
    }

    const handleHashChange = () => {
      if (!setActiveFromHash()) {
        setActiveFromScroll()
      }
    }

    if (!setActiveFromHash()) {
      setActiveFromScroll()
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', setActiveFromScroll)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', setActiveFromScroll)
    }
  }, [])

  return { activeHref, setActiveHref }
}
