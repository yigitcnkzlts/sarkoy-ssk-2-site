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

export default function Home() {
  return (
    <main>
      <Hero />
      <SiteStats />
      <HomeIntro />
      <HomeFacilities />
      <HomeLocationWeather />
      <HomeGalleryPreview />
      <HomeAnnouncementsPreview />
      <HomeEventsPreview />
      <HomeQuickLinks />
      <HomeCta />
    </main>
  );
}
