import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "@/components/motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import si from "@/assets/svc-interior.jpg";
import sx from "@/assets/svc-exterior.jpg";
import ss from "@/assets/svc-structural.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nextgen Solutions & Contracting" },
      {
        name: "description",
        content:
          "Selected interior, exterior and construction projects delivered by Nextgen across Saudi Arabia.",
      },
      { property: "og:title", content: "Portfolio — Nextgen" },
      {
        property: "og:description",
        content: "Hospitality, retail, healthcare, residential and commercial works.",
      },
    ],
  }),
  component: Portfolio,
});

type Cat = "All" | "Interior" | "Exterior" | "Construction";
const items: { src: string; cat: Exclude<Cat, "All">; title: string }[] = [
  { src: p1, cat: "Interior", title: "Hospitality Lobby" },
  { src: si, cat: "Interior", title: "Residential Fit-Out" },
  { src: p3, cat: "Interior", title: "Corporate Office" },
  { src: p6, cat: "Interior", title: "Retail Concept" },
  { src: p5, cat: "Interior", title: "Healthcare Suite" },
  { src: p4, cat: "Exterior", title: "Modern Villa" },
  { src: sx, cat: "Exterior", title: "Stone Façade" },
  { src: p2, cat: "Construction", title: "Structural Steel" },
  { src: ss, cat: "Construction", title: "Frame Erection" },
];

function Portfolio() {
  const [filter, setFilter] = useState<Cat>("All");
  const list = filter === "All" ? items : items.filter((i) => i.cat === filter);
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Portfolio
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold">Selected work.</h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">
              A snapshot of recent projects across hospitality, residential, corporate, healthcare
              and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="container-page pt-20 pb-10 md:pb-20">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["All", "Interior", "Exterior", "Construction"] as Cat[]).map((c) => (
            <motion.button
              key={c}
              onClick={() => setFilter(c)}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold border transition ${filter === c ? "text-background border-foreground" : "border-border hover:border-foreground"}`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-foreground -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">{c}</span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((it) => (
              <motion.div
                key={it.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              >
                <motion.img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="size-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">{it.cat}</span>
                  <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
