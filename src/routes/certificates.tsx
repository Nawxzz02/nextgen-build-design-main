import { createFileRoute } from "@tanstack/react-router";
import { FileCheck, Award, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Nextgen Solutions & Contracting" },
      {
        name: "description",
        content:
          "Commercial registration and corporate documentation for Nextgen Solutions & Contracting Est.",
      },
      { property: "og:title", content: "Certificates — Nextgen" },
      { property: "og:description", content: "Officially registered Saudi contractor." },
    ],
  }),
  component: Certificates,
});

const docs = [
  {
    icon: FileCheck,
    title: "Commercial Registration",
    desc: "Officially registered with the Ministry of Commerce, Kingdom of Saudi Arabia.",
  },
  {
    icon: ShieldCheck,
    title: "VAT & Zakat Certificate",
    desc: "Compliant with ZATCA filing and tax obligations.",
  },
  {
    icon: Award,
    title: "Chamber of Commerce",
    desc: "Member of the Eastern Province Chamber of Commerce.",
  },
];

function Certificates() {
  return (
    <>
      <section className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Certificates
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold">
            Registered. Compliant. Accountable.
          </h1>
        </div>
      </section>
      <section className="container-page pt-20 pb-10 md:pb-20 grid md:grid-cols-3 gap-6">
        {docs.map((d) => (
          <div
            key={d.title}
            className="p-8 rounded-2xl bg-card border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="size-12 rounded-lg flex items-center justify-center"
              style={{ background: "var(--gradient-gold)" }}
            >
              <d.icon className="size-6 text-accent-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{d.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
            <div className="mt-6 aspect-[3/4] rounded-lg border-2 border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
              Certificate scan
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
