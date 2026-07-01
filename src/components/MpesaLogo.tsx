export default function MpesaLogo({ className = 'h-12 w-36' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="139" height="43" rx="6" fill="#1b5e20" stroke="rgba(46,125,50,0.3)" />
      <text x="16" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" fill="white" letterSpacing="-1">M</text>
      <text x="42" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="22" fill="white" letterSpacing="1">PESA</text>
      <line x1="94" y1="12" x2="94" y2="32" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="100" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="9" fill="white" opacity="0.9">Safaricom</text>
      <text x="100" y="35" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" fontSize="7" fill="white" opacity="0.5">Send · Withdraw · Buy</text>
    </svg>
  )
}
