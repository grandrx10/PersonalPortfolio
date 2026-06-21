// Resolves a path in /public against the site's base URL so images work both
// at the domain root (username.github.io) and in a subpath (username.github.io/repo).
// Usage: asset('/images/foo.svg')  ->  '<base>images/foo.svg'
// Absolute URLs (http/https) are returned untouched.
export const asset = (path) =>
  /^https?:\/\//i.test(path)
    ? String(path)
    : import.meta.env.BASE_URL + String(path).replace(/^\//, '')
