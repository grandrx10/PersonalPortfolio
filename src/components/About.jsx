const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'C++', 'Git']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
        <span className="text-indigo-500">#</span> About
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Write a couple of paragraphs about yourself here — your background,
            what you enjoy working on, and what you're looking for. Keep it warm
            and concise.
          </p>
          <p>
            You can mention your current role, your interests, or a fun fact.
            This is the spot to give visitors a sense of who you are.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
            Tech I work with
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
