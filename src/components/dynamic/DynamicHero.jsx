import { motion, useMotionValue, useSpring } from 'motion/react'
import { asset } from '../../lib/asset.js'
import GradientText from './GradientText.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function DynamicHero() {
  // Track the pointer in client coordinates; the titles map it onto themselves.
  const pointerX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth * 0.3 : 400)
  const pointerY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight * 0.4 : 300)
  const x = useSpring(pointerX, { stiffness: 150, damping: 25, mass: 0.5 })
  const y = useSpring(pointerY, { stiffness: 150, damping: 25, mass: 0.5 })

  const handleMouseMove = (e) => {
    pointerX.set(e.clientX)
    pointerY.set(e.clientY)
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Subtle background image, heavily washed out for the light theme.
          Swap the file at public/images/hero-bg.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={asset('/images/hero-bg.jpg')}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-slate-50" />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left: intro text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-4">
            <GradientText
              x={x}
              y={y}
              spread={300}
              className="text-sm font-semibold uppercase tracking-[0.3em]"
            >
              Portfolio
            </GradientText>
          </motion.p>
          <motion.h1 variants={item} className="text-5xl font-black tracking-tight sm:text-7xl">
            <GradientText x={x} y={y} spread={750} className="inline-block pb-4 leading-[1.3]">
              Richard Yang
            </GradientText>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-lg text-slate-600 sm:text-xl"
          >
            Fourth-year Computer Science specialist at the University of Toronto,
            building full-stack web apps and AI-powered tools.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
            >
              Explore projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right: portrait with gradient frame, glow, and availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 lg:mt-0"
        >
          <div className="relative mx-auto max-w-xs sm:max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-400/40 via-fuchsia-400/30 to-cyan-300/40 blur-2xl" />
            <motion.div
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-[3px] shadow-xl"
            >
              <img
                src={asset('/images/about-1.jpg')}
                alt="Portrait of Richard Yang"
                className="aspect-[4/5] w-full rounded-[1.35rem] border-4 border-white object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to new-grad roles
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        ↓ scroll
      </motion.div>
    </section>
  )
}
