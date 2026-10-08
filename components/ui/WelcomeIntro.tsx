'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Module-level flag prevents React StrictMode double-effect from breaking animation
let _alreadyRan = false

export default function WelcomeIntro() {
  const [show, setShow] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    // Already ran in this module lifecycle (StrictMode second run, or HMR)
    if (_alreadyRan) return
    // Already seen this session
    if (sessionStorage.getItem('welcome-seen')) return

    _alreadyRan = true
    sessionStorage.setItem('welcome-seen', '1')

    setShow(true)
    setTextVisible(true)

    // After 900ms fade the text out, after 1500ms remove overlay
    const t1 = setTimeout(() => setTextVisible(false), 900)
    const t2 = setTimeout(() => setShow(false), 1500)

    // Intentionally not cleaning up t1/t2 — they must complete
    // _alreadyRan prevents the StrictMode re-run from firing duplicate timers
    return () => { /* no-op */ }
  }, [])

  // Don't render anything if animation is done or skipped
  if (!show && !textVisible) return null

  if (prefersReduced) {
    // Skip animation entirely for reduced-motion users
    return null
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: '#F7F6F4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <AnimatePresence>
            {textVisible && (
              <motion.p
                key="welcome-text"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontSize: '17px', fontWeight: 500,
                  color: '#6B6B6B', letterSpacing: '-0.01em',
                }}
              >
                Welcome to my space.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
