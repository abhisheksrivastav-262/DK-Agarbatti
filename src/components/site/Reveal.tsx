import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-5 w-40" />
      {subtitle ? <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p> : null}
    </Reveal>
  );
}
