import Reveal from './Reveal.jsx'

const socials = [
  { label: 'Email', href: 'mailto:richard.yang@geomechanica.com' },
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
]

export default function DynamicContact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <Reveal>
        <h2 className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text pb-2 text-4xl font-black leading-[1.2] text-transparent sm:text-5xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-slate-600">
          I'm always open to new projects and conversations. Reach out anytime.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-transform hover:scale-105 hover:border-indigo-400 hover:text-indigo-600"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
