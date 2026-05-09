import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Sparkles, ArrowRight, Factory, Building2, Hospital, HardHat, Home, Landmark, ClipboardList, PenTool, Zap, Flag } from "lucide-react";
import p2 from "@/assets/portfolio-2.jpg";
import vision2030 from "@/assets/vision-2030.png";
import { Reveal, StaggerGroup, StaggerItem, motion } from "@/components/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nextgen Solutions & Contracting" },
      { name: "description", content: "Saudi-registered contractor delivering interior fit-out, MEP and construction across commercial, hospitality, healthcare, retail, industrial and residential sectors." },
      { property: "og:title", content: "About Nextgen Solutions & Contracting" },
      { property: "og:description", content: "Vision 2030–aligned construction and smart systems delivery." },
    ],
  }),
  component: AboutPage,
});

const values = ["Innovation", "Integrity", "Client-centric", "Sustainability", "Seamless execution"];
const sectors = [
  { name: "Industrial & Energy", icon: Factory, desc: "Rigorous safety and high-spec builds." },
  { name: "Commercial & Retail", icon: Building2, desc: "High-traffic spaces designed for efficiency." },
  { name: "Healthcare", icon: Hospital, desc: "Specialized systems and clinical environments." },
  { name: "Infrastructure", icon: HardHat, desc: "Large-scale civil and structural projects." },
  { name: "Residential", icon: Home, desc: "Premium finishes and bespoke craft." },
  { name: "Government", icon: Landmark, desc: "Reliable delivery for national milestones." },
];

const methodology = [
  { step: "01", title: "Consultation", desc: "Deep dive into technical requirements, site constraints, and feasibility.", icon: ClipboardList },
  { step: "02", title: "Engineering", desc: "Integrated civil, MEP, and smart system designs tailored to budget.", icon: PenTool },
  { step: "03", title: "Execution", desc: "Trade-certified crews working under disciplined site supervision.", icon: Zap },
  { step: "04", title: "Handover", desc: "Testing, commissioning, and final walkthrough for perfect completion.", icon: Flag },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">About Us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">Building what Saudi Arabia needs next.</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            Nextgen Solutions & Contracting Est. is a Saudi-registered (2026) contractor specializing in interior fit-out and integrated construction services.
          </p>
        </div>
      </section>

      <section className="container-page pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">Sectors</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Expertise where it matters.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              From heavy industrial plants to high-end clinical environments — our delivery model adapts to the specific compliance, safety, and finish standards of each sector.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {sectors.map(s => (
                <div key={s.name} className="p-5 rounded-2xl border border-border bg-card/50 hover:border-accent transition-colors group">
                  <div className="size-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-base">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <img src={p2} alt="Construction site" loading="lazy" className="size-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent" />
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 md:py-28 border-y border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">Process</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Our Methodology</h2>
              <p className="mt-5 text-muted-foreground">The Nextgen way is defined by four clear phases that ensure cost-certainty and uncompromising finish quality.</p>
            </Reveal>
          </div>
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {methodology.map((m, i) => (
              <div key={m.step} className="relative">
                {/* Connecting line */}
                {i < methodology.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 1.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-12 left-1/2 w-full h-px border-t border-dashed border-border origin-left z-0" 
                  />
                )}
                
                {/* Step Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 1.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="size-16 rounded-2xl bg-card border border-border flex items-center justify-center text-accent-foreground mb-6 transition-colors shadow-sm" 
                    style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-card)" }}
                  >
                    <m.icon className="size-7" />
                  </motion.div>
                  <div className="text-xs font-bold text-accent mb-2">{m.step}</div>
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Vision", text: "To be a leading global provider of smart and sustainable construction solutions." },
            { icon: Target, title: "Mission", text: "Deliver innovative, sustainable solutions that exceed client expectations from concept to handover." },
            { icon: Sparkles, title: "Values", text: values.join(" · ") },
          ].map(c => (
            <div key={c.title} className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="size-12 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                <c.icon className="size-6 text-accent-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 border-b border-border overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">National Commitment</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Vision 2030 & Leadership</h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
            {/* LEADERSHIP MESSAGES (LEFT) */}
            <Reveal className="relative p-8 md:p-14 rounded-3xl bg-card border border-border overflow-hidden flex flex-col space-y-12" style={{ boxShadow: "var(--shadow-card)" }}>
              {/* KING SALMAN */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold">Custodian of the Two Holy Mosques</span>
                <div className="mt-6 relative">
                  <div className="absolute -left-6 -top-4 text-6xl text-brand-blue/10 font-serif">“</div>
                  <h3 className="text-xl md:text-2xl font-bold italic leading-relaxed text-foreground text-justify">
                    My primary goal is to be an exemplary and leading nation in all aspects, and I will work with you in achieving this endeavour.
                  </h3>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-bold text-lg leading-tight">King Salman Bin Abdulaziz Al-Saud</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">King of Saudi Arabia</p>
                </div>
              </div>

              {/* CROWN PRINCE */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold">Crown Prince Message</span>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm font-medium text-justify">
                  <p>“We commit ourselves to providing world class government services which effectively and efficiently meet the needs of our citizens. Together we will continue building a better country, fulfilling our dream of prosperity and unlocking the talent, potential, and dedication of our young men and women. We will not allow our country ever to be at the mercy of a commodity price volatility or external markets.”</p>
                  <p>“We have all the means to achieve our dreams and ambitions. There are no excuses for us to stand still or move backwards. Our Vision is a strong, thriving, and stable Saudi Arabia that provides opportunity for all.”</p>
                  <p className="text-[11px] text-brand-blue/70 italic border-l-2 border-brand-blue/30 pl-4 py-1">
                    We intend to provide better opportunities for partnerships with the private sector through the three pillars: our position as the heart of the Arab and Islamic worlds, our leading investment capabilities, and our strategic geographical position.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-bold text-lg leading-tight text-foreground">His Royal Highness Prince Mohammed bin Salman bin Abdulaziz</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                    Crown Prince, Deputy Prime Minister, and Chairman of the Council of Economic and Development Affairs
                  </p>
                </div>
              </div>
            </Reveal>

            {/* VISION 2030 GRAPHIC (RIGHT - ONLY IMAGE) */}
            <Reveal delay={0.2} className="relative group rounded-3xl overflow-hidden min-h-[500px] bg-[#010101]" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img 
                src={vision2030} 
                alt="Saudi Vision 2030" 
                className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
