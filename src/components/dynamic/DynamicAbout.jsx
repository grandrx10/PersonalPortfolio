import Reveal from './Reveal.jsx'
import HeroCollage from './HeroCollage.jsx'

const skills = [
  'React',
  'Node.js',
  'Python',
  'REST API',
  'Java',
  'C#',
  'C / C++',
  'PostgreSQL',
  'Docker',
  'R',
  'Bash / Shell Script',
  'JavaScript',
  'Lua',
  'AWS EC2',
  'AWS Code Deploy',
  'Docker',
  'Git',
]

const stats = [
  { value: '3.96', label: 'GPA' },
  { value: '100+', label: 'Daily users shipped' },
  { value: '3×', label: 'Hackathon awards' },
  { value: '2 years', label: 'Industry experience' },
]

export default function DynamicAbout() {
  return (
  <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-5">
        {/* Draggable photo collage — drag a photo and it springs back; click to enlarge */}
        <Reveal className="md:col-span-2">
          <HeroCollage />
        </Reveal>

        <div className="md:col-span-3">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About me</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                Hi! My name is Richard, and I'm currently a fourth-year Computer
                Science specialist at the University of Toronto with a passion for
                app development. Currently, I'm working as an SWE Intern at
                Geomechanica, maintaining and updating a licensing portal with
                100+ daily users.
              </p>
              <p>
                In my free time, I love to explore a wide variety of programming
                topics, making projects for each of them. Game dev is my biggest hobby outside of work, which is how I ended up as the current president of UofT's Game Design &amp; Development Club.
              </p>
            </div>
          </Reveal>

          {/* Stat highlights */}
          <Reveal delay={0.1}>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <dt className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-2xl font-black text-transparent">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Toolbox
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
