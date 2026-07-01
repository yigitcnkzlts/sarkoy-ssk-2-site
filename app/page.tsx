import HomeAnnouncementsPreview from "@/components/home/HomeAnnouncementsPreview";
import HomeCta from "@/components/home/HomeCta";
import HomeEventsPreview from "@/components/home/HomeEventsPreview";
import HomeFacilities from "@/components/home/HomeFacilities";
import HomeGalleryPreview from "@/components/home/HomeGalleryPreview";
import HomeIntro from "@/components/home/HomeIntro";
import HomeLocationWeather from "@/components/home/HomeLocationWeather";
import HomeQuickLinks from "@/components/HomeQuickLinks";
import Hero from "@/components/Hero";
import SiteStats from "@/components/SiteStats";
import { getAnnouncements } from "@/lib/announcements";
import { contentStore } from "@/lib/db/store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const announcements = (await getAnnouncements()).slice(0, 3);
  const events = (await contentStore.getEvents(true)).slice(0, 3);

  return (
    <main>
      <Hero />
      <SiteStats />
      <HomeIntro />
      <HomeFacilities />
      <HomeLocationWeather />
      <HomeGalleryPreview />
      <HomeAnnouncementsPreview items={announcements} />
      <HomeEventsPreview items={events} />
      <HomeQuickLinks />
      <HomeCta />
    </main>
  );
}
