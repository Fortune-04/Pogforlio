interface SparklineProps {
  data: number[]
  stroke?: string
  className?: string
  height?: number
}

// Very small inline sparkline (no external libs) for revenue trend.
export function Sparkline({ data, stroke = '#f59e0b', className = '', height = 80 }: SparklineProps) {
  if (!data.length) return null
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 280
  const step = width / (data.length - 1)
  const points = data
    .map((v, i) => {
      const x = i * step
      const y = height - ((v - min) / range) * height
      return `${x},${y}`
    })
    .join(' ')
  const areaPoints = `0,${height} ${points} ${width},${height}`
  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Revenue trend" className={className} width="100%" height={height}>
      <defs>
        <linearGradient id={`gradient-${data[0]}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.3" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polyline points={areaPoints} fill={`url(#gradient-${data[0]})`} stroke="none" />
      <polyline points={points} fill="none" stroke={stroke} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}
