import { motion } from "motion/react";
import {
  Flame,
  Droplets,
  Bell,
  Flower2,
  Gem,
  Gift,
  Star,
  BadgeCheck,
  Wallet,
  Leaf,
  Truck,
  Users,
  PackageCheck,
  Wind,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRODUCT_GROUPS, WHY_US, TESTIMONIALS, FAQS, PHONES, EMAIL, WHATSAPP } from "@/lib/site-data";
import new1 from "@/assets/new.png";
import new2 from "@/assets/new2.png";
import new3 from "@/assets/new3.png";
import new4 from "@/assets/new4.png";
import new5 from "@/assets/new5.png";
import new6 from "@/assets/new6.png";
import new7 from "@/assets/new7.png";
import new8 from "@/assets/new8.png";
import temple from "@/assets/temple.jpg";

const GROUP_ICONS = [Flame, Droplets, Bell, Flower2, Gem, Gift];
const WHY_ICONS = [BadgeCheck, Wallet, Leaf, Truck, Users, PackageCheck, Wind, HeartHandshake];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={temple}
              alt="Ornate Indian temple decorated with marigold garlands"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] sm:h-[520px]"
            />
            <div className="glass-card absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4 text-center sm:left-10 sm:right-10">
              <p className="font-display text-lg text-primary">Purity · Fragrance · Devotion</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold-deep">About Us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Devotion, crafted into every stick
            </h2>
            <div className="gold-rule mt-5 w-40" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              DK Agarbatti & Club provides premium quality agarbatti and complete pooja essentials for homes,
              temples, shops and religious ceremonies. Our mission is to deliver purity, fragrance and
              devotion through every product we make and every order we pack.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From our head office in Maharashtra and our branch in Panjim, Goa, we serve families,
              priests, retailers and wholesalers across India with a collection that covers every
              ritual — from a daily morning aarti to a full wedding pooja.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Head Office", "Maharashtra"],
                ["Branch", "Panjim, Goa"],
              ].map(([k, v]) => (
                <div key={k} className="glass-card rounded-2xl px-5 py-4">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 font-display text-xl text-primary">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="relative bg-[image:var(--gradient-cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Everything for your pooja"
          subtitle="Over forty five products across incense, daily essentials, metal ware, offerings and complete festival kits."
        />

        <div className="mt-16 space-y-16">
          {PRODUCT_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[gi % GROUP_ICONS.length]!;
            return (
              <div key={group.title}>
                <Reveal className="flex min-w-0 items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] text-gold-foreground shadow-[var(--shadow-gold)]">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <h3 className="truncate font-display text-2xl font-semibold text-primary sm:text-3xl">
                      {group.title}
                    </h3>
                    <p className="truncate text-xs text-muted-foreground sm:text-sm">{group.blurb}</p>
                  </span>
                </Reveal>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.items.map((item, i) => (
                    <Reveal key={item.name} delay={Math.min(i * 0.04, 0.3)}>
                      <motion.article
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="group h-full rounded-2xl border border-gold/25 bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:border-gold/70"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-gold-deep transition-colors group-hover:bg-[image:var(--gradient-gold)] group-hover:text-gold-foreground">
                          <Icon size={16} />
                        </span>
                        <h4 className="mt-4 font-display text-lg font-semibold text-primary">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                      </motion.article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted for pure devotion"
          subtitle="Quality you can smell, prices you can trust and service that keeps customers coming back."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length]!;
            return (
              <Reveal key={w.title} delay={Math.min(i * 0.05, 0.35)}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card h-full rounded-3xl p-6 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] text-gold-foreground shadow-[var(--shadow-gold)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-primary">{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: new1, alt: "Gallery Image 1", h: 1024 },
  { src: new2, alt: "Gallery Image 2", h: 1400 },
  { src: new3, alt: "Gallery Image 3", h: 1024 },
  { src: new4, alt: "Gallery Image 4", h: 1280 },
  { src: new5, alt: "Gallery Image 5", h: 1024 },
  { src: new6, alt: "Gallery Image 6", h: 1300 },
  { src: new7, alt: "Gallery Image 7", h: 1280 },
  { src: new8, alt: "Gallery Image 8", h: 1024 },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[image:var(--gradient-cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of the sacred"
          subtitle="Agarbatti, diyas, brass ware, malas and rituals from our collection."
        />
        <div className="mt-14 columns-2 gap-3 sm:columns-2 sm:gap-5 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-5">
          {GALLERY.map((g, i) => (
            <Reveal key={g.alt} delay={Math.min(i * 0.05, 0.3)}>
              <figure className="group overflow-hidden rounded-3xl border border-gold/25 shadow-[var(--shadow-soft)]">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={g.h}
                  loading="lazy"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Words from our devotees" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.blockquote
                whileHover={{ y: -6 }}
                className="glass-card relative h-full rounded-3xl p-7"
              >
                <Quote className="absolute right-6 top-6 text-gold/40" size={34} />
                <div className="flex gap-1 text-gold-deep">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <footer className="mt-6 border-t border-gold/25 pt-4">
                  <p className="font-display text-lg text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.place}</p>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[image:var(--gradient-cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass-card rounded-2xl border px-5"
              >
                <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Order or enquire today"
          subtitle="Call us, message us on WhatsApp, or send your product list by email."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full rounded-3xl p-7 sm:p-9">
              <ul className="space-y-6">
                <li className="flex min-w-0 gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] text-gold-foreground">
                    <Phone size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Phone</p>
                    {PHONES.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="block font-display text-xl text-primary hover:text-gold-deep"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex min-w-0 gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] text-gold-foreground">
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="block truncate text-base text-primary hover:text-gold-deep"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex min-w-0 gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-gold)] text-gold-foreground">
                    <MapPin size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Head Office
                    </p>
                    <p className="font-display text-xl text-primary">Maharashtra</p>
                    <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                      Branch
                    </p>
                    <p className="font-display text-xl text-primary">Panjim, Goa</p>
                  </div>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONES[0]}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-5 py-3 text-sm font-medium text-gold-foreground transition-transform hover:scale-105"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-medium text-primary transition-transform hover:scale-105"
                >
                  <Mail size={15} /> Email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full overflow-hidden rounded-3xl border border-gold/30 shadow-[var(--shadow-soft)]">
              <iframe
                title="DK Agarbatti locations map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.6%2C15.3%2C74.2%2C19.3&layer=mapnik"
                className="h-[420px] w-full lg:h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
