import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projects } from '../../data/projects.js'
import Reveal from './Reveal.jsx'
import { asset } from '../../lib/asset.js'

// Normalize a project to an array of image paths (supports `images` or `image`).
const getImages = (p) =>
  p?.images?.length ? p.images : p?.image ? [p.image] : []

export default function DynamicProjects() {
  const allTags = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)))
    return ['All', ...set]
  }, [])

  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.tags?.includes(active))

  // Lightbox state: the open project and which image is showing.
  const [selected, setSelected] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)
  const selectedImages = getImages(selected)

  const open = (project) => {
    setSelected(project)
    setImgIndex(0)
  }
  const close = () => setSelected(null)
  const next = () => setImgIndex((n) => (n + 1) % selectedImages.length)
  const prev = () => setImgIndex((n) => (n - 1 + selectedImages.length) % selectedImages.length)

  // Keyboard controls + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight' && selectedImages.length > 1) next()
      if (e.key === 'ArrowLeft' && selectedImages.length > 1) prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, selectedImages.length])

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Selected work</h2>
        <p className="mt-2 text-slate-500">
          Filter by what you're curious about — click a project to view it larger.
        </p>
      </Reveal>

      {/* Tag filter pills */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === tag
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'border border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Animated grid — cards fade/scale in & out as the filter changes */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const imgs = getImages(project)
            const hasLinks = project.liveUrl || project.demoUrl || project.repoUrl
            return (
              <motion.article
                key={project.title}
                layout
                onClick={() => open(project)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:from-indigo-500/5 group-hover:to-fuchsia-500/5 group-hover:opacity-100" />
                {imgs.length > 0 && (
                  <div className={`grid ${imgs.length > 1 ? 'grid-cols-2 gap-px' : ''}`}>
                    {imgs.slice(0, 2).map((src, idx) => (
                      <div key={idx} className="overflow-hidden">
                        <img
                          src={asset(src)}
                          alt={`${project.title} ${imgs.length > 1 ? idx + 1 : ''}`}
                          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                    {project.date && (
                      <span className="shrink-0 text-xs font-medium text-slate-400">
                        {project.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{project.description}</p>
                  {project.tags?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  {hasLinks && (
                    <div className="mt-5 flex gap-4 text-sm font-medium">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Live ↗
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Demo ↗
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-500 hover:text-slate-900"
                        >
                          Code ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

            <motion.div
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Image viewer */}
              {selectedImages.length > 0 && (
                <div className="relative flex items-center justify-center bg-slate-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIndex}
                      src={asset(selectedImages[imgIndex])}
                      alt={`${selected.title} ${imgIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="max-h-[60vh] w-full object-contain"
                    />
                  </AnimatePresence>

                  {selectedImages.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-white">
                        {imgIndex + 1} / {selectedImages.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Details */}
              <div className="overflow-y-auto p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-900">{selected.title}</h3>
                  {selected.date && (
                    <span className="shrink-0 text-sm font-medium text-slate-400">
                      {selected.date}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-slate-600">{selected.description}</p>

                {/* Deeper write-up — modal only */}
                {Array.isArray(selected.details) ? (
                  <ul className="mt-4 space-y-2">
                    {selected.details.map((d, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  selected.details && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {selected.details}
                    </p>
                  )
                )}

                {selected.tags?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                {(selected.liveUrl || selected.demoUrl || selected.repoUrl) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {selected.liveUrl && (
                      <a href={selected.liveUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                        Live ↗
                      </a>
                    )}
                    {selected.demoUrl && (
                      <a href={selected.demoUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                        Demo ↗
                      </a>
                    )}
                    {selected.repoUrl && (
                      <a href={selected.repoUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900">
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
