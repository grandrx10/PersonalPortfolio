import { asset } from '../lib/asset.js'

function LinkIcon({ href, label, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-500"
    >
      {children}
      {label}
    </a>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {project.image && (
        <img
          src={asset(project.image)}
          alt={project.title}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex gap-4">
          <LinkIcon href={project.liveUrl} label="Live" />
          <LinkIcon href={project.repoUrl} label="Code" />
        </div>
      </div>
    </article>
  )
}
