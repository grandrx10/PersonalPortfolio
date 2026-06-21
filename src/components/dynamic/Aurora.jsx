import { motion } from 'motion/react'

// Animated, slowly drifting gradient blobs behind everything. Pure eye-candy.
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-indigo-300/40 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-fuchsia-300/35 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 90, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-200/40 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
