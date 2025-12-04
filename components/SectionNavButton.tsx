interface SectionNavButtonProps {
  href: string
  label: string
}

export default function SectionNavButton({ href, label }: SectionNavButtonProps) {
  return (
    <div className="mt-24 flex justify-center">
      <a
        href={href}
        className="text-sm font-medium text-brand-text hover:text-brand-black transition-colors group inline-flex items-center gap-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
      >
        {label}
        <span className="inline-block transform group-hover:translate-y-0.5 transition-transform">
          ↓
        </span>
      </a>
    </div>
  )
}
