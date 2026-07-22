"use client"

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)

  const mouseRef = useRef({ x: -100, y: -100 })
  const currentRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.getAttribute('role') === 'button' ||
          target.closest('a') ||
          target.closest('button'))
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    // Smooth viscous LERP loop for honey-slow tracking
    const updatePhysics = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.14
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.14

      setPosition({
        x: Math.round(currentRef.current.x * 100) / 100,
        y: Math.round(currentRef.current.y * 100) / 100,
      })

      animId = requestAnimationFrame(updatePhysics)
    }

    updatePhysics()

    const onMouseDown = () => setIsMouseDown(true)
    const onMouseUp = () => setIsMouseDown(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Custom Glowing Bended Feather Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-4px, -4px) scale(${
            isMouseDown ? 0.85 : isHovered ? 1.4 : 1
          })`,
        }}
      >
        {/* Soft Radial Ambient Glow Aura behind Feather */}
        <div
          className="absolute w-12 h-12 rounded-full blur-md opacity-80 animate-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(201,168,76,0.6) 0%, rgba(99,102,241,0.4) 60%, transparent 100%)',
            animationDuration: '3s',
          }}
        />

        {/* Custom Bended Glowing Feather SVG Pointer */}
        <div
          className="relative text-amber-400 filter"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.95)) drop-shadow(0 0 20px rgba(99,102,241,0.7))',
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform -rotate-12"
          >
            {/* Bended Feather Vane Body Silhouette */}
            <path
              d="M 4,2 Q 18,2 26,12 C 30,18 28,26 22,28 C 16,30 10,24 8,18 Q 2,10 4,2 Z"
              fill="url(#bended-cursor-vane)"
              opacity="0.9"
            />

            {/* Curved Center Quill Spine */}
            <path
              d="M 2,2 Q 16,6 24,18 Q 28,24 30,30"
              stroke="url(#bended-cursor-quill)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Curved Barbs */}
            <path d="M 8,6 Q 16,10 20,16" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />
            <path d="M 12,10 Q 18,14 22,20" stroke="rgba(167, 139, 250, 0.8)" strokeWidth="1" />
            <path d="M 15,14 Q 20,18 24,23" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />

            {/* Tip North Star Flare */}
            <path
              d="M 2,-1 L 3,1 L 5,2 L 3,3 L 2,5 L 1,3 L -1,2 L 1,1 Z"
              fill="#fbbf24"
            />

            <defs>
              <linearGradient id="bended-cursor-quill" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="0.6" stopColor="#c9a84c" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="bended-cursor-vane" x1="4" y1="2" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#c9a84c" stopOpacity="0.6" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hover Sparkle Ring on Interactive Elements */}
        {isHovered && (
          <div
            className="absolute -top-1 -left-1 w-10 h-10 rounded-full border border-amber-400/60 bg-amber-400/15 animate-ping pointer-events-none"
            style={{ animationDuration: '1.5s' }}
          />
        )}
      </div>
    </div>
  )
}
