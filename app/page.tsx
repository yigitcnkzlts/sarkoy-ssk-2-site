import HomeAnnouncementsPreview from "@/components/home/HomeAnnouncementsPreview";
import HomeCta from "@/components/home/HomeCta";
import HomeEventsPreview from "@/components/home/HomeEventsPreview";
import HomeFacilities from "@/components/home/HomeFacilities";
import HomeIntro from "@/components/home/HomeIntro";
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
      <HomeAnnouncementsPreview />
      <HomeEventsPreview />
      <HomeQuickLinks />
      <HomeCta />
    </main>
  );
}
