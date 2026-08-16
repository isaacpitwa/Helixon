import { cn } from '@/lib/cn'
import MagneticButton from './MagneticButton'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'outline' | 'solid'
  magnetic?: boolean
}

export default function Button({
  children, variant = 'outline', magnetic = true, className, ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase ' +
    'px-7 py-4 rounded-full border relative overflow-hidden transition-colors duration-300 ' +
    'group/button'
  const variants = {
    outline: 'border-ink/15 text-ink hover:border-teal hover:text-bg',
    solid: 'border-transparent bg-gradient-to-r from-teal to-[#2bc4ae] text-bg font-medium hover:text-white',
  }
  const inner = (
    <a {...rest} className={cn(base, variants[variant], className)}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 scale-x-0 origin-left group-hover/button:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)] -z-0',
          variant === 'outline' ? 'bg-gradient-to-r from-teal to-blue' : 'bg-gradient-to-r from-copper to-copper-deep'
        )}
      />
    </a>
  )
  return magnetic ? <MagneticButton>{inner}</MagneticButton> : inner
}
