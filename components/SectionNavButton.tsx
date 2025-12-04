interface SectionNavButtonProps {
  href: string
  label: string
}

export default function SectionNavButton({ href, label }: SectionNavButtonProps) {
  return (
    <div className="mt-16 flex justify-center">
      <a
        href={href}
        className="px-5 py-2 rounded-full border-2 border-brand-accent text-sm font-medium text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300"
      >
        {label} ↓
      </a>
    </div>
  )
}
