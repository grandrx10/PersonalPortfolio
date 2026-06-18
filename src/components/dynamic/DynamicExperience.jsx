import { motion } from 'motion/react'
import { experience } from '../../data/experience.js'
import Reveal from './Reveal.jsx'
import { asset } from '../../lib/asset.js'

// Scattered offsets / rotations for the little photo cluster beside each job.
const POS = ['left-0 top-0 z-20', 'left-16 top-10 z-10 sm:left-20', 'left-6 top-24 z-0']
const ROT = [-6, 5, -3]

function PhotoCluster({ photos }) {
  if (!photos?.length) return null
  const height = photos.length >= 3 ? 'h-48' : 'h-40'
  return (
    <div className={`relative mx-auto w-52 shrink-0 sm:mx-0 ${height}`}>
      {photos.slice(0, 3).map((src, i) => (
        <motion.img
          key={i}
          src={asset(src)}
          alt=""
          aria-hidden="true"
          draggable={false}
          initial={{ rotate: ROT[i] }}
          whileHover={{ scale: 1.09, rotate: 0, zIndex: 40 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          className={`absolute h-24 w-32 rounded-xl border-4 border-white object-cover shadow-lg ${POS[i]}`}
        />
      ))}
    </div>
  )
}

export default function DynamicExperience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Experience</h2>
        <p className="mt-2 text-slate-500">Where I've worked and what I built.</p>
      </Reveal>

      {/* Vertical timeline */}
      <div className="mt-12 border-l border-slate-200 pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className={`relative ${i < experience.length - 1 ? 'pb-16' : ''}`}>
              {/* Dot on the line */}
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100 sm:-left-[3.05rem]" />

              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
                {/* Left: details */}
                <div>
                  <p className="text-sm font-medium text-indigo-500">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {job.role}
                    <span className="text-slate-400"> · </span>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-400"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className="text-slate-700">{job.company}</span>
                    )}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {job.tags?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 shadow-sm"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right: photo cluster */}
                <PhotoCluster photos={job.photos} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
