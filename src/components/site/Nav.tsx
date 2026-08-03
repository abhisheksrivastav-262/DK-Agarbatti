import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";
import { PHONES } from "@/lib/site-data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-x-0 border-t-0 py-2" : "border-transparent py-4"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="DK Agarbatti logo"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-gold/50 sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold leading-none text-primary sm:text-xl">
              DK Agarbatti & Club
            </span>
            <span className="block truncate text-[11px] tracking-wide text-muted-foreground">
              Wholesaler
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+91${PHONES[0]}`}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105"
          >
            Call Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-primary lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass-card mx-4 mt-3 rounded-2xl p-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:+91${PHONES[0]}`}
                className="mt-2 block rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Call {PHONES[0]}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
