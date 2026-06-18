import { useRef } from 'react'
import { motion, useMotionTemplate, useTransform } from 'motion/react'

// Text filled with a RADIAL gradient whose center tracks the mouse. The
// `center` color originates at the cursor and blends out to `mid` then `edge`,
// so moving the mouse redistributes the colors across the letters.
//   x, y      — springed CLIENT coordinates of the pointer (from the parent)
//   spread    — radius (px) over which center → edge happens
export default function GradientText({
  children,
  className = '',
  x,
  y,
  spread = 360,
  center = '#a855f7', // purple — originates at the cursor
  mid = '#4f46e5', // indigo / blue
  edge = '#06b6d4', // cyan
}) {
  const ref = useRef(null)

  // Convert the global pointer position into coordinates local to this element.
  const localX = useTransform(x, (v) => v - (ref.current?.getBoundingClientRect().left ?? 0))
  const localY = useTransform(y, (v) => v - (ref.current?.getBoundingClientRect().top ?? 0))

  const background = useMotionTemplate`radial-gradient(${spread}px circle at ${localX}px ${localY}px, ${center}, ${mid} 35%, ${edge} 75%)`

  return (
    <motion.span
      ref={ref}
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: background }}
    >
      {children}
    </motion.span>
  )
}
