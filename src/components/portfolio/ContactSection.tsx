import { Mail, MapPin, Phone } from "lucide-react";
import { contact, skillGroups } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-divider mb-16">
      <h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-foreground">
        Technical Skills &amp; Contact
      </h2>

      <div className="mt-4 flex flex-col gap-4">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className="text-[13px] italic text-muted-foreground">{g.label}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-secondary px-3 py-1 text-[13px] text-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-md border border-border px-5 py-4 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <strong className="font-semibold text-foreground">Location:</strong> {contact.location}
        </span>
        <span className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <strong className="font-semibold text-foreground">Email:</strong>
          <a href={`mailto:${contact.email}`} className="link-accent">
            {contact.email}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <strong className="font-semibold text-foreground">Phone:</strong>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-accent">
            {contact.phone}
          </a>
        </span>
      </div>
    </section>
  );
}
