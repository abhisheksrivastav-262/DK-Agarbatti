import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Products, WhyUs, Gallery, Testimonials, Faq, Contact } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { FloatingActions, Loader } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DK Agarbatti — Complete Pooja Products Store" },
      {
        name: "description",
        content:
          "Premium agarbatti, dhoop, camphor, brass diya, pooja thali and festival pooja kits. DK Agarbatti & Club — Maharashtra & Panjim, Goa. Call 7820908684.",
      },
      { property: "og:title", content: "DK Agarbatti — Complete Pooja Products Store" },
      {
        property: "og:description",
        content:
          "Premium quality agarbatti and all pooja essentials for your daily worship. Wholesale and retail across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "DK Agarbatti & Club",
          description:
            "Premium agarbatti and complete pooja products store serving homes, temples and shops across India.",
          telephone: ["+917820908684", "+918446239186"],
          email: "dkagarbatti2025@gmail.com",
          address: [
            { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
            {
              "@type": "PostalAddress",
              addressLocality: "Panjim",
              addressRegion: "Goa",
              addressCountry: "IN",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Loader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
