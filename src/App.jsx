import MinimalLayout from './layouts/MinimalLayout.jsx'
import DynamicLayout from './layouts/DynamicLayout.jsx'

// ─────────────────────────────────────────────────────────────────────────
// Switch layouts here. Set to 'minimal' or 'dynamic'.
//   minimal  → clean, light, original design
//   dynamic  → dark, animated, interactive (aurora bg, scroll reveals, filters)
// You can also append ?layout=minimal or ?layout=dynamic to the URL to override.
// ─────────────────────────────────────────────────────────────────────────
const ACTIVE_LAYOUT = 'dynamic'

const fromUrl = new URLSearchParams(window.location.search).get('layout')
const layout = fromUrl || ACTIVE_LAYOUT

export default function App() {
  return layout === 'minimal' ? <MinimalLayout /> : <DynamicLayout />
}
