import { useState } from "react";
import { cn } from "@/lib/utils";
import { filterProjects, projectFilters, projects, type ProjectFilter } from "@/data/portfolio";

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filterProjects(projects, filter);

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
          <li
            key={p.title}
            className="rounded-md border border-border bg-card p-4 transition-colors hover:border-border-strong"
          >
            <span
              className={cn(
                "inline-block rounded-sm px-1.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider",
                p.tag === "Python" ? "bg-secondary text-banner-navy" : "bg-secondary text-primary",
              )}
            >
              {p.tag}
            </span>
            <h3 className="mt-2.5 text-[15px] font-semibold leading-snug text-foreground">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-body">{p.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
