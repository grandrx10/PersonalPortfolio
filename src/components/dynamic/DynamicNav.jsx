import { motion, useScroll, useSpring } from 'motion/react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function DynamicNav() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      {/* Reading-progress bar across the very top */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-indigo-400 to-fuchsia-400"
      />
      <nav className="fixed left-1/2 top-5 z-40 -translate-x-1/2">
        <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-2 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-md">
          <li>
            <a href="#top" className="rounded-full px-3 py-1.5 font-bold text-slate-900 hover:bg-slate-100">
              RY<span className="text-indigo-500">.</span>
            </a>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="rounded-full px-3 py-1.5 hover:bg-slate-100 hover:text-slate-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
