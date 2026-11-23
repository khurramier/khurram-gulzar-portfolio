import { publications } from "@/data/portfolio";

export function PublicationsSection() {
  return (
    <section id="publications" aria-labelledby="pub-heading" className="section-divider">
      <h2 id="pub-heading" className="text-2xl font-bold tracking-tight text-foreground">
        Selected Publications &amp; Thesis
      </h2>
      <ol className="mt-5 flex flex-col gap-5">
        {publications.map((p) => (
          <li key={p.title} className="prose-measure">
            <p className="font-semibold leading-snug text-foreground">{p.title}</p>
            <p className="mt-1 text-sm">
              <em className="text-primary">{p.venue}</em>
              <span className="text-muted-foreground">
                {" "}
                · {p.year}
                {p.details ? `, ${p.details}` : ""}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
