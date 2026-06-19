import { siteConfig } from "@/lib/site";

type SiteBrandProps = {
  variant?: "mark" | "navbar" | "hero" | "footer" | "inline";
  light?: boolean;
  className?: string;
};

export default function SiteBrand({
  variant = "navbar",
  light = false,
  className = "",
}: SiteBrandProps) {
  if (variant === "mark") {
    return (
      <div
        className={`brand-mark flex h-full w-full flex-col items-center justify-center leading-none ${className}`}
        aria-hidden
      >
        <span
          className={`brand-ssk text-[9px] font-bold tracking-[0.18em] ${
            light ? "text-white/90" : "text-navy"
          }`}
        >
          SSK
        </span>
        <span className="brand-num -mt-0.5 text-lg font-bold">2</span>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <h1 className={`font-display ${className}`}>
        <span className="mb-2 block text-lg font-medium tracking-[0.35em] text-sea-light uppercase sm:text-xl">
          Şarköy
        </span>
        <span className="flex flex-wrap items-end gap-2 sm:gap-3">
          <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            SSK
          </span>
          <span className="brand-num-hero mb-1 sm:mb-2">2</span>
        </span>
        <span className="mt-1 block text-4xl font-bold tracking-tight text-white/95 sm:text-5xl lg:text-6xl">
          Sitesi
        </span>
      </h1>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`font-display ${className}`}>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-white">SSK</span>
          <span className="brand-num-footer">2</span>
        </div>
        <p className="mt-1 text-sm text-white/50">Şarköy · Tekirdağ</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <span className={`inline-flex items-end gap-0.5 font-display font-bold ${className}`}>
        <span className={light ? "text-white" : "text-navy"}>SSK</span>
        <span className="brand-num-inline">2</span>
      </span>
    );
  }

  return (
    <div className={className}>
      <p
        className={`font-display flex items-end gap-1 text-base font-bold leading-none ${
          light ? "text-white" : "text-navy"
        }`}
      >
        <span>SSK</span>
        <span className="brand-num-inline text-xl leading-none">2</span>
        <span className="ml-0.5 text-sm font-semibold">Sitesi</span>
      </p>
      <p
        className={`mt-1 text-[10px] font-medium uppercase tracking-[0.15em] ${
          light ? "text-white/50" : "text-navy/45"
        }`}
      >
        {siteConfig.location}
      </p>
    </div>
  );
}
