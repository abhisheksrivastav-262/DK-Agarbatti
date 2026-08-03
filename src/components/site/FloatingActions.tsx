import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import { PHONES, WHATSAPP } from "@/lib/site-data";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      <AnimatePresence>
        {show ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-card/80 text-primary shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:scale-110"
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={`tel:${PHONES[0]}`}
        aria-label="Call DK Agarbatti"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
      >
        <Phone size={20} />
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[image:var(--gradient-cream)]"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-14 w-14 rounded-full border-2 border-gold/25 border-t-gold-deep"
            />
            <p className="mt-5 font-display text-xl tracking-wide text-primary">DK Agarbatti</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
