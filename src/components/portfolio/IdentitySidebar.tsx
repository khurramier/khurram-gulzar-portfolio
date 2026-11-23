import { ChartBar, Github, GraduationCap, Mail, PenLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contact } from "@/data/portfolio";
import profilePhoto from "@/assets/khurram.jpg.asset.json";

const profileLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8OwAt94AAAAJ&hl=en", icon: GraduationCap },
  { label: "DataCamp Portfolio", href: "https://www.datacamp.com/portfolio/oec5tek3w", icon: ChartBar },
  { label: "GitHub", href: "https://github.com/khurramier", icon: Github },
  { label: "Urdu Blog", href: "https://wp.me/pfKuGL-o", icon: PenLine },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
];

const affiliations = [
  "Senior Teacher (BPS-18), Computer Science — National Special Education Complex (NSEC), Lahore",
  "Consultant System Analyst & HOD (SEF) — Dar-e-Arqam Foundation",
  "Tutor & Resource Person — Allama Iqbal Open University (AIOU)",
];

export function IdentitySidebar() {
  return (
    <aside className="md:sticky md:top-20 md:self-start">
      <div className="relative z-10 -mt-20 h-[200px] w-[200px] overflow-hidden rounded-sm border-[6px] border-background bg-banner-navy shadow-portrait">
        <img
          src={profilePhoto.url}
          alt="Dr. Khurram Gulzar"
          className="h-full w-full object-cover object-center"
          width={200}
          height={200}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold leading-tight text-foreground">Dr. Khurram Gulzar</h2>
        <p className="mt-1 text-[13.5px] font-medium leading-snug text-subtle">
          Education &amp; Research Professional | Certified Associate Data Analyst
        </p>
        <ul className="mt-3 space-y-1.5 text-[13px] leading-normal text-muted-foreground">
          {affiliations.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <ul className="mt-5 flex flex-col gap-2.5 text-sm">
        {profileLinks.map(({ label, href, icon: Icon }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <a
              href={href}
              className="link-muted"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
