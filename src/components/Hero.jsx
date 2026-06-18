export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
        Hi, my name is
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
        Richard Yang.
      </h1>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl dark:text-slate-500">
        I build things.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
        A one-line intro about who you are and what you do. Swap this for your own
        tagline — engineer, designer, researcher, whatever fits.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
