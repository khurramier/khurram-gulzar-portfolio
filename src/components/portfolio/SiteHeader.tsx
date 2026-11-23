import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data/portfolio";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-6">
        <a href="#about" className="text-lg font-bold text-foreground">
          Dr. Khurram Gulzar
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-subtle transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="text-base font-bold text-foreground">Dr. Khurram Gulzar</SheetTitle>
            <nav aria-label="Mobile" className="mt-8 flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-[15px] font-medium text-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
