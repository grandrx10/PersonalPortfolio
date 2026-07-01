import { motion } from 'motion/react'
import { awards } from '../../data/awards.js'
import Reveal from './Reveal.jsx'

export default function DynamicAwards() {
  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Awards</h2>
        <p className="mt-2 text-slate-500">Scholarships and competition placements.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {/* Placement badge */}
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-lg font-black text-white shadow-sm">
                {award.placement}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{award.title}</h3>
                  {award.prize && (
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                      {award.prize}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-slate-600">
                  {award.event}
                  {award.year && <span className="text-slate-400"> · {award.year}</span>}
                </p>

                {award.note && (
                  <p className="mt-2 text-xs font-medium text-slate-400">{award.note}</p>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
