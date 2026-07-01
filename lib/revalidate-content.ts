import { revalidatePath } from "next/cache";

export function revalidateSiteContent() {
  revalidatePath("/", "layout");
  revalidatePath("/duyurular");
  revalidatePath("/etkinlikler");
  revalidatePath("/sitemap.xml");
}
