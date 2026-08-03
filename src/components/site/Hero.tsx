import { motion } from "motion/react";
import { Phone, MessageCircle, Sparkles, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { PHONES, WHATSAPP, TAGLINE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Incense sticks, brass diyas and pooja thali before a temple"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.985_0.012_85/0.96)_0%,oklch(0.985_0.012_85/0.82)_38%,oklch(0.985_0.012_85/0.25)_70%,transparent_100%)]" />

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl animate-float-smoke"
          style={{
            right: `${8 + i * 16}%`,
            top: `${12 + i * 18}%`,
            animationDelay: `${i * 2.2}s`,
          }}
        />
      ))}

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex flex-col items-center gap-1 rounded-3xl border border-gold/45 bg-card/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep backdrop-blur sm:items-start sm:px-5">
            <span className="flex items-center gap-2"><Sparkles size={13} /> DK Agarbatti & Club</span>
            <span className="text-[9px] text-muted-foreground">Wholesaler</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Complete Pooja <span className="text-gilded">Products Store</span>
          </h1>

          <p className="mt-4 font-display text-xl text-gold-deep sm:text-2xl">{TAGLINE}</p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Premium quality agarbatti and all pooja essentials for your daily worship — for homes,
            temples, shops and religious ceremonies.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONES[0]}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-card/70 px-6 py-3.5 text-sm font-medium text-primary backdrop-blur transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-6 py-3.5 text-sm font-medium text-gold-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-105"
            >
              View Products <ArrowDown size={16} />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              ["45+", "Pooja Products"],
              ["2", "Locations"],
              ["100%", "Pure & Natural"],
            ].map(([v, k]) => (
              <div key={k} className="glass-card rounded-2xl px-3 py-4 text-center">
                <dt className="font-display text-2xl font-semibold text-primary sm:text-3xl">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
