interface LogoProps {
  /** Couleur du mot « L'Éden » (le mot « Fruité » garde son accent). */
  color?: string
  accent?: string
  stacked?: boolean
}

// Logo L'Éden Fruité : agrume coupé + wordmark (polices du site).
export default function Logo({ color = "white", accent = "#EA6660", stacked = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5" style={{ color }}>
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
        <circle cx="20" cy="22" r="15" fill={accent} />
        <circle cx="20" cy="22" r="12.2" fill="#FED117" />
        <g stroke={accent} strokeWidth="1.4" strokeLinecap="round">
          <path d="M20 22V10.5M20 22l10 5.8M20 22l-10 5.8M20 22l8.2-8.2M20 22l-8.2-8.2M20 22h11.5M20 22H8.5" opacity=".75" />
        </g>
        <circle cx="20" cy="22" r="2.2" fill="#FAF9F5" />
        <path d="M21 7c1-3 4-5 8-5-.5 4-3.500 6-8 5z" fill="#6AA22C" />
      </svg>
      <span className={stacked ? "block leading-none" : "leading-none"}>
        <span className="font-display text-xl lg:text-2xl tracking-tight">L&apos;Éden</span>
        <span className="font-script text-base lg:text-lg ml-1" style={{ color: accent }}>
          Fruité
        </span>
      </span>
    </span>
  )
}
