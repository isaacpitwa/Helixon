import { cn } from '@/lib/cn'

export default function Sheet({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('w-[min(1400px,96vw)] mx-auto my-3.5 rounded-[44px] md:rounded-sheet bg-paper text-bg overflow-hidden', className)}>
      <div className="py-20 md:py-32">{children}</div>
    </div>
  )
}
