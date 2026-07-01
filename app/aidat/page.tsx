import AidatContent from "@/components/AidatContent";
import AidatLogin from "@/components/AidatLogin";
import PageBanner from "@/components/PageBanner";
import { isAidatAuthenticated } from "@/lib/aidat-auth";
import { pageMeta } from "@/lib/navigation";
import { pageTitle } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageTitle(pageMeta["/aidat"].title),
  description: pageMeta["/aidat"].description,
};

export default async function AidatPage() {
  const meta = pageMeta["/aidat"];
  const authed = await isAidatAuthenticated();

  return (
    <main>
      <PageBanner
        title={meta.title}
        description={
          authed
            ? meta.description
            : "Aidat bilgileri yalnızca site sakinlerine özeldir. Aşağıdan giriş yapın."
        }
      />
      {authed ? <AidatContent /> : <AidatLogin />}
    </main>
  );
}
