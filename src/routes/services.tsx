import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nextgen Solutions & Contracting" },
      {
        name: "description",
        content:
          "Construction, structural works, enclosure, exterior finishes, MEP systems, interior finishes and specialized smart-systems works.",
      },
      { property: "og:title", content: "Our Services — Nextgen" },
      {
        property: "og:description",
        content: "Six integrated service categories under one accountable contract.",
      },
    ],
  }),
  component: ServicesShell,
});

function ServicesShell() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId.startsWith("/services/"));
  if (isChild) return <Outlet />;
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Services
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">
            Six categories. One accountable contract.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            From breaking ground to commissioning smart systems — every trade delivered by one team.
          </p>
        </div>
      </section>
      <section className="container-page pt-20 pb-10 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-accent transition-all"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  Learn more{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
