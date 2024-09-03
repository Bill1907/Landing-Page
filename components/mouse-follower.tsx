'use client'

import { useState, useEffect, useCallback } from 'react'

export default function CenteredMouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        className="absolute w-12 h-12 bg-primary opacity-50 rounded-full will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      />
    </div>
  )
}