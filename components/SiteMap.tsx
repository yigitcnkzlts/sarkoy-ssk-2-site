import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

type SiteMapProps = {
  compact?: boolean;
  className?: string;
};

export default function SiteMap({ compact = false, className = "" }: SiteMapProps) {
  return (
    <div className={`overflow-hidden rounded-3xl ${className}`}>
      <div className={`relative ${compact ? "h-[220px]" : "h-[320px] sm:h-[420px]"}`}>
        <iframe
          title={`${siteConfig.fullName} konumu`}
          src={siteConfig.map.embedUrl}
          className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      {!compact && (
        <div className="flex flex-col gap-3 border-t border-sand/60 bg-sand-light/40 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 flex-shrink-0 text-sea" />
            <div>
              <p className="font-semibold text-navy">{siteConfig.address}</p>
              <p className="text-sm text-navy/60">
                Cumhuriyet Mah. sahil bandı · Denize 1 dakika
              </p>
            </div>
          </div>
          <Link
            href={siteConfig.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Yol Tarifi Al
            <ExternalLink size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}
