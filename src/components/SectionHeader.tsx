import { cn } from '../lib/utils'

interface SectionHeaderProps {
  tag: string
  title: string
  description?: string
  light?: boolean
  className?: string
}

export default function SectionHeader({ tag, title, description, light, className }: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto mb-12 max-w-3xl text-center', className)}>
      <span className={cn(
        'inline-block rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4',
        light ? 'border-gmc-gold/40 text-gmc-gold' : 'border-gmc-gold/30 text-gmc-gold'
      )}>
        {tag}
      </span>
      <h2 className={cn(
        'font-display text-4xl font-bold md:text-5xl',
        light ? 'text-white' : 'text-white'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg',
          light ? 'text-gmc-muted' : 'text-gmc-muted'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
