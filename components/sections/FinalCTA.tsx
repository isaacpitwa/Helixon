import RevealText from '@/components/ui/RevealText'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute w-[44vmin] h-[44vmin] -right-[8vmin] top-[6vmin] rounded-full bg-[radial-gradient(circle_at_32%_30%,#d8fff3,#3ce0b8_45%,#0a3f34_100%)] opacity-50 blur-sm animate-[float_9s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[26vmin] h-[26vmin] left-[4vmin] bottom-[4vmin] rounded-full bg-[radial-gradient(circle_at_32%_30%,#eef9ff,#7d95d6_50%,#1c2a52_100%)] opacity-45 animate-[float_9s_ease-in-out_infinite_alternate_-3s]" />
      <div className="absolute w-[14vmin] h-[14vmin] left-[38vw] top-[12vmin] rounded-full bg-[radial-gradient(circle_at_32%_30%,#ffe9d4,#e0863c_55%,#5a2d10_100%)] opacity-50 animate-[float_9s_ease-in-out_infinite_alternate_-6s]" />

      <div className="w-[min(1240px,92vw)] mx-auto px-4 md:px-0 relative z-10">
        <p className="sec-label">06 / Collaborate</p>
        <h2 className="font-display font-extrabold text-4xl md:text-8xl uppercase leading-[1.04] tracking-tight">
          <RevealText lines={["Let's build", "what's next."]} accentIndex={1} />
        </h2>

        <FadeIn delay={0.2} className="flex gap-5 items-center flex-wrap mt-10">
          <Button href="mailto:partnerships@helixon.bio" variant="solid">Start a collaboration ↗</Button>
          <a href="mailto:partnerships@helixon.bio" className="font-mono text-sm text-ink-dim border-b border-ink/20 pb-1 hover:text-teal hover:border-teal transition-colors">
            partnerships@helixon.bio
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
