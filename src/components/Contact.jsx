const socials = [
  { label: 'Email', href: 'mailto:richardyrq.yang@mail.utoronto.ca' },
  { label: 'GitHub', href: 'https://github.com/grandrx10' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/richard-yang-36217b11b/' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
        What's next?
      </h2>
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Get in touch</h3>
      <p className="mx-auto mt-4 max-w-md text-slate-600 dark:text-slate-300">
        I'm always happy to chat about new projects, opportunities, or just to
        connect. Drop me a line.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}
