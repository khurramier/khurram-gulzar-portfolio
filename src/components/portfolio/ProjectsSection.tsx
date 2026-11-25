import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_PROJECT_COUNT,
  filterProjects,
  projectFilters,
  projects,
  visibleProjects,
  type ProjectFilter,
} from "@/data/portfolio";

const PORTFOLIO_URL = "https://www.datacamp.com/portfolio/oec5tek3w";

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [expanded, setExpanded] = useState(false);
  const visible = visibleProjects(projects, filter, expanded);
  const showToggle = filter === "All" && projects.length > DEFAULT_PROJECT_COUNT;

  return (
    <section id="projects" aria-labelledby="proj-heading" className="section-divider">
      <h2 id="proj-heading" className="text-2xl font-bold tracking-tight text-foreground">
        Data Analytics Portfolio Projects
      </h2>
      <p className="prose-measure mt-1.5 text-[13px] italic leading-normal text-muted-foreground">
        Note: The following projects were completed as part of DataCamp certification and hands-on coursework. They
        represent structured analytical practice rather than commercial client engagements.
      </p>

      <div role="tablist" aria-label="Filter projects" className="mt-4 flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                active
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-border",
              )}
            >
              {f} ({filterProjects(projects, f).length})
            </button>
          );
        })}
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <li key={p.title}>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-md border border-border bg-card p-4 transition-colors hover:border-border-strong"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={cn(
                    "inline-block rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider",
                    p.tag === "Python" ? "bg-secondary text-banner-navy" : "bg-secondary text-primary",
                  )}
                >
                  {p.tag}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-2.5 text-[15px] font-semibold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">{p.summary}</p>
            </a>
          </li>
        ))}
      </ul>

      {showToggle ? (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="rounded-full border border-border-strong px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {expanded ? "Show Fewer Projects" : `View All ${projects.length} Projects`}
          </button>
        </div>
      ) : null}
    </section>
  );
}
