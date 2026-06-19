export type GalleryCategory = "Tümü" | "Site Genel" | "Deniz & Plaj" | "Etkinlik" | "Ortak Alan";

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Tümü">;
  span?: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Tümü",
  "Site Genel",
  "Deniz & Plaj",
  "Etkinlik",
  "Ortak Alan",
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Site genel görünüm",
    category: "Site Genel",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/images/gallery-2.jpg", alt: "Yeşil alanlar", category: "Ortak Alan" },
  { src: "/images/gallery-3.jpg", alt: "Site girişi", category: "Site Genel" },
  { src: "/images/gallery-4.jpg", alt: "Ortak alan", category: "Ortak Alan" },
  {
    src: "/images/gallery-5.jpg",
    alt: "Deniz manzarası",
    category: "Deniz & Plaj",
    span: "sm:col-span-2",
  },
  { src: "/images/gallery-6.jpg", alt: "Etkinlik alanı", category: "Etkinlik" },
  { src: "/images/hero.jpg", alt: "Şarköy kıyısı", category: "Deniz & Plaj" },
  { src: "/images/gallery-2.jpg", alt: "Beach club alanı", category: "Etkinlik" },
];
