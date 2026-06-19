import Link from "next/link";

interface PageBannerProps {
  title: string;
  description?: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <div className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-sea/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sea/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="transition-colors hover:text-sea-light">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-sea-light">{title}</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
