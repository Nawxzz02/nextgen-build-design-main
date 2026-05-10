import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { z } from "zod";
import { getService, services, type Service, type SubService } from "@/lib/services-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "@/components/motion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Nextgen Solutions & Contracting` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.short },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-32 text-center">
      <p className="text-destructive">{error.message}</p>
      <button onClick={reset} className="mt-4 underline">
        Retry
      </button>
    </div>
  ),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-4xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex underline">
        Back to services
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const svc: Service = Route.useLoaderData();
  const idx = services.findIndex((s) => s.slug === svc.slug);
  const next = services[(idx + 1) % services.length];
  const [active, setActive] = useState<SubService | null>(null);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={svc.image} alt={svc.title} className="size-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, oklch(0.13 0.03 265 / 0.92), oklch(0.13 0.03 265 / 0.55))",
            }}
          />
        </div>
        <div className="relative container-page py-24 md:py-32 text-white">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl">{svc.title}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">{svc.short}</p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {svc.sections.map((sec, i) => (
              <div key={i}>
                {sec.heading && <h2 className="text-2xl font-bold mb-5">{sec.heading}</h2>}
                <ul className="space-y-4">
                  {sec.items.map((item, j) => {
                    const isActive = active?.name === item.name;
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: j * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setActive(isActive ? null : item)}
                          className={`group w-full text-left flex items-center gap-4 p-5 rounded-xl border transition-all ${
                            isActive
                              ? "bg-accent/5 border-accent shadow-sm"
                              : "bg-card border-border hover:border-accent/50 hover:shadow-md"
                          }`}
                        >
                          <div
                            className={`size-6 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-accent text-white" : "bg-muted text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"}`}
                          >
                            <CheckCircle2 className="size-3.5" />
                          </div>
                          <span
                            className={`font-semibold flex-1 ${isActive ? "text-foreground" : "text-foreground/80"}`}
                          >
                            {item.name}
                          </span>
                          <Plus
                            className={`size-5 text-muted-foreground transition-all duration-300 ${isActive ? "rotate-45 text-accent" : "group-hover:text-accent"}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <div className="p-6 pt-2 bg-accent/5 border-x border-b border-accent/20 rounded-b-xl -mt-2 space-y-6">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-inner">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="space-y-4">
                                  <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                  </p>
                                  <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                                    style={{ background: "var(--gradient-gold)" }}
                                  >
                                    Enquire about {item.name} <ArrowRight className="size-4" />
                                  </Link>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <aside className="space-y-4">
            <div
              className="p-6 rounded-2xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <h3 className="font-bold text-lg">Need this trade?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Talk to our project team about scope, timeline and pricing.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-accent-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Request a Quote <ArrowRight className="size-4" />
              </Link>
            </div>
            <Link
              to="/services/$slug"
              params={{ slug: next.slug }}
              className="block p-6 rounded-2xl border border-border hover:border-accent transition group"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Next service
              </span>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold group-hover:text-accent transition-colors">
                  {next.title}
                </span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
