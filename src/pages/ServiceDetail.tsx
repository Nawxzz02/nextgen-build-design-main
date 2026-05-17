import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { getService, services, type SubService } from "@/lib/services-data";
import { motion } from "@/components/motion";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const svc = slug ? getService(slug) : null;
  
  if (!svc) {
    return (
      <div className="container-page py-32 text-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex underline">
          Back to services
        </Link>
      </div>
    );
  }

  const idx = services.findIndex((s) => s.slug === svc.slug);
  const next = services[(idx + 1) % services.length];
  const [active, setActive] = useState<SubService | null>(null);

  return (
    <div className="bg-background min-h-screen">
      {/* Gradient Hero Banner */}
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page pt-32 pb-20 text-primary-foreground">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold">
            <Link to="/services" className="text-accent hover:text-accent/80 transition-colors">
              Services
            </Link>
            <span className="text-primary-foreground/40">/</span>
            <span className="text-primary-foreground/80">{svc.title}</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-4xl text-primary-foreground">
            {svc.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            {svc.short}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Detailed Overview, Subservices, and Action Cards */}
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
            {/* Overview Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <h2 className="text-2xl font-bold text-foreground">
                  Overview
                </h2>
              </div>
              {svc.overview ? (
                <div className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed text-muted-foreground space-y-4 text-justify">
                  {svc.overview.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Detailed overview of our {svc.title.toLowerCase()} service offerings.
                </p>
              )}
            </div>

            {/* Subservices List */}
            {svc.sections && svc.sections.length > 0 && (
              <div className="space-y-6">
                {svc.sections.map((sec, i) => (
                  <div key={i} className="space-y-6">
                    {sec.heading && (
                      <h2 className="text-2xl font-bold text-foreground border-b border-border/60 pb-3">
                        {sec.heading}
                      </h2>
                    )}
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
                                className={`size-6 rounded-full flex items-center justify-center transition-colors ${
                                  isActive
                                    ? "bg-accent text-white"
                                    : "bg-muted text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
                                }`}
                              >
                                <CheckCircle2 className="size-3.5" />
                              </div>
                              <span
                                className={`font-semibold flex-1 ${
                                  isActive ? "text-foreground" : "text-foreground/80"
                                }`}
                              >
                                {item.name}
                              </span>
                              <Plus
                                className={`size-5 text-muted-foreground transition-all duration-300 ${
                                  isActive ? "rotate-45 text-accent" : "group-hover:text-accent"
                                }`}
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
                                  <div className="p-6 pt-4 bg-accent/5 border-x border-b border-accent/20 rounded-b-xl -mt-2 space-y-4">
                                    <p className="text-muted-foreground leading-relaxed text-justify">
                                      {item.description}
                                    </p>
                                    <div>
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
            )}

            {/* Action Cards Grid - Two Equal Space Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Card 1: Need this trade? */}
              <div
                className="p-8 rounded-2xl text-primary-foreground flex flex-col justify-between h-full min-h-[220px] shadow-lg transition-transform duration-300 hover:translate-y-[-2px]"
                style={{ background: "var(--gradient-hero)" }}
              >
                <div>
                  <h3 className="font-bold text-2xl">Need this trade?</h3>
                  <p className="mt-3 text-base text-primary-foreground/80 leading-relaxed">
                    Talk to our project team about scope, timeline and pricing.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-[1.02]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Request a Quote <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Next Service */}
              <Link
                to={`/services/${next.slug}`}
                className="block p-8 rounded-2xl border border-border hover:border-accent bg-card shadow-sm hover:shadow-lg transition-all duration-300 group flex-col justify-between h-full min-h-[220px] hover:translate-y-[-2px]"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                    Next service
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                    {next.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed line-clamp-2">
                    {next.short}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <div className="size-10 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm">
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Service Preview Image (Sticky & Taller) */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="relative aspect-video lg:aspect-3/4 rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img
                src={svc.image}
                alt={svc.title}
                className="size-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
