import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONES, EMAIL, WHATSAPP, TAGLINE, PRODUCT_GROUPS } from "@/lib/site-data";

const QUICK = [
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="DK Agarbatti logo"
              width={56}
              height={56}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/50"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-semibold text-primary">
                DK Agarbatti & Club
              </span>
              <span className="block truncate text-[11px] text-muted-foreground">Wholesaler</span>
            </span>
          </div>
          <p className="mt-4 font-display text-base text-gold-deep">{TAGLINE}</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Social profile"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-[image:var(--gradient-gold)] hover:text-gold-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-primary">Products</h3>
          <ul className="mt-4 space-y-2.5">
            {PRODUCT_GROUPS.map((g) => (
              <li key={g.title}>
                <a
                  href="#products"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-primary">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {PHONES.map((p) => (
              <li key={p}>
                <a href={`tel:+91${p}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone size={14} /> {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-w-0 items-center gap-2 hover:text-primary"
              >
                <Mail size={14} /> <span className="truncate">{EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </li>
            <li>Maharashtra · Panjim, Goa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/25 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 DK Agarbatti. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
