import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { HeroBanner } from "@/components/portfolio/HeroBanner";
import { IdentitySidebar } from "@/components/portfolio/IdentitySidebar";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { PublicationsSection } from "@/components/portfolio/PublicationsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const title = "Dr. Khurram Gulzar — Education Researcher & Data Analyst";
const description =
  "PhD-qualified education and research professional in Lahore bridging academic leadership, curriculum assessment, and data analytics. Publications, projects, and experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <HeroBanner />
      <main className="mx-auto w-full max-w-[1080px] flex-1 px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_1fr] md:gap-12">
          <IdentitySidebar />
          <div className="min-w-0">
            <AboutSection />
            <PublicationsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
