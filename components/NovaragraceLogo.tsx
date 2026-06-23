export function NovaragraceLogo({ footer = false }: { footer?: boolean }) {
  if (footer) {
    return (
      <svg height="40" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2,4)">
          <polygon points="32,2 36,22 56,26 36,30 32,52 28,30 8,26 28,22" fill="rgba(255,255,255,0.45)" />
          <circle cx="32" cy="26" r="5" fill="rgba(196,138,154,0.7)" />
        </g>
        <text x="76" y="30" fontFamily="Cormorant Garamond,serif" fontSize="20" fontWeight="600" letterSpacing="3" fill="rgba(255,255,255,0.65)">NOVARA GRACE</text>
        <rect x="76" y="36" width="50" height="0.6" fill="rgba(196,138,154,0.5)" />
        <text x="76" y="50" fontFamily="Jost,sans-serif" fontSize="6.5" fontWeight="400" letterSpacing="2.5" fill="rgba(155,91,110,0.65)">CENTRE FOR CHILD DEVELOPMENT AND FAMILY WELFARE</text>
      </svg>
    )
  }

  return (
    <svg height="48" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2,4)">
        <polygon points="32,2 36,22 56,26 36,30 32,52 28,30 8,26 28,22" fill="#1E6B5B" opacity="0.9" />
        <polygon points="32,8 35,20 47,26 35,32 32,46 29,32 17,26 29,20" fill="#9B5B6E" opacity="0.55" />
        <circle cx="32" cy="26" r="5" fill="#9B5B6E" />
      </g>
      <text x="76" y="30" fontFamily="Cormorant Garamond,Georgia,serif" fontSize="22" fontWeight="600" letterSpacing="3" fill="#1E6B5B">NOVARA GRACE</text>
      <rect x="76" y="36" width="60" height="0.8" fill="#9B5B6E" opacity="0.6" />
      <text x="76" y="50" fontFamily="Jost,sans-serif" fontSize="7.5" fontWeight="400" letterSpacing="2.5" fill="#9B5B6E">CENTRE FOR CHILD DEVELOPMENT AND FAMILY WELFARE</text>
    </svg>
  )
}
