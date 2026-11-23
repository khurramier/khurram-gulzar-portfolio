import { degrees, roles } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="section-divider">
      <h2 id="exp-heading" className="text-2xl font-bold tracking-tight text-foreground">
        Education &amp; Leadership Experience
      </h2>

      <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Academic Degrees</h3>
      <ul className="mt-3 flex flex-col gap-2.5">
        {degrees.map((d) => (
          <li key={d.title} className="prose-measure">
            <strong className="font-semibold text-foreground">{d.title}</strong>
            <span className="text-body"> — {d.org}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Key Leadership &amp; Teaching Roles
      </h3>
      <ul className="mt-3 flex flex-col gap-3">
        {roles.map((r) => (
          <li key={r.title} className="prose-measure flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span>
              <strong className="font-semibold text-foreground">{r.title}</strong>
              <span className="text-body"> — {r.org}</span>
            </span>
            {r.period ? (
              <span className="shrink-0 text-[13px] text-muted-foreground tabular-nums">{r.period}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
