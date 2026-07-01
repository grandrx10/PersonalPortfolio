import Aurora from '../components/dynamic/Aurora.jsx'
import DynamicNav from '../components/dynamic/DynamicNav.jsx'
import DynamicHero from '../components/dynamic/DynamicHero.jsx'
import DynamicAbout from '../components/dynamic/DynamicAbout.jsx'
import DynamicExperience from '../components/dynamic/DynamicExperience.jsx'
import DynamicAwards from '../components/dynamic/DynamicAwards.jsx'
import DynamicProjects from '../components/dynamic/DynamicProjects.jsx'
import DynamicContact from '../components/dynamic/DynamicContact.jsx'

// Layout 2 — dark, animated, interactive. Motion-driven with a drifting aurora
// background, scroll reveals, a reading-progress bar, and filterable projects.
export default function DynamicLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Aurora />
      <DynamicNav />
      <main>
        <DynamicHero />
        <DynamicAbout />
        <DynamicExperience />
        <DynamicProjects />
        <DynamicAwards />
        <DynamicContact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Built with React, Tailwind &amp; Motion · Hosted on Vercel
      </footer>
    </div>
  )
}
