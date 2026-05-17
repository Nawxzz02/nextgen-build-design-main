import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

export default function Services() {
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Services
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">
            Nine categories. One accountable contract.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            From breaking ground to commissioning smart systems — every element delivered by one professional team.
          </p>
          <div className="mt-6 flex items-center gap-3 text-accent font-semibold text-sm tracking-wider uppercase">
            <span className="h-[2px] w-8 bg-accent/70 rounded-full"></span>
            <span>Building Excellence Across Saudi Arabia</span>
          </div>
        </div>
      </section>
      <section className="container-page pt-20 pb-10 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-accent transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-4/3 overflow-hidden shrink-0">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </div>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    Learn more{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
