import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  Factory,
  Building2,
  Hospital,
  HardHat,
  Home,
  Landmark,
  ClipboardList,
  PenTool,
  Zap,
  Flag,
  Trophy,
} from "lucide-react";
import p2 from "@/assets/portfolio-2.jpg";
import vision2030 from "@/assets/vision-2030.png";
import { Reveal, motion } from "@/components/motion";

const values = [
  "Innovation",
  "client-centricity",
  "integrity",
  "sustainability",
  "and seamless execution",
];
const sectors = [
  { name: "Industrial & Energy", icon: Factory, desc: "Rigorous safety and high-spec builds." },
  {
    name: "Commercial & Retail",
    icon: Building2,
    desc: "High-traffic spaces designed for efficiency.",
  },
  { name: "Healthcare", icon: Hospital, desc: "Specialized systems and clinical environments." },
  { name: "Infrastructure", icon: HardHat, desc: "Large-scale civil and structural projects." },
  { name: "Residential", icon: Home, desc: "Premium finishes and bespoke craft." },
  { name: "Government", icon: Landmark, desc: "Reliable delivery for national milestones." },
];

const methodology = [
  {
    step: "01",
    title: "Consultation",
    desc: "Deep dive into technical requirements, site constraints, and feasibility.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Engineering",
    desc: "Integrated civil, MEP, and smart system designs tailored to budget.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Execution",
    desc: "Trade-certified crews working under disciplined site supervision.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Handover",
    desc: "Testing, commissioning, and final walkthrough for perfect completion.",
    icon: Flag,
  },
];

export default function About() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            About Us
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">
            Building what Saudi Arabia needs next.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            Nextgen Solutions & Contracting Est. is a Saudi-registered (2026) contractor
            specializing in interior fit-out and integrated construction services.
          </p>
        </div>
      </section>

      <section className="container-page pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
              About us
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Nextgen Solutions & Contracting Est.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed text-justify">
              <p>
                Nextgen Solutions and Contracting Est. is a professionally registered interior fit-out and contracting establishment headquartered in Al Jubail,
                Kingdom of Saudi Arabia. Incorporated in 2026 under the Ministry of Commerce, 
                Nextgen was founded on a singular conviction: that the quality of built environments directly 
                shapes the performance, well-being, and identity of the people who occupy them.
              </p>
              <p>
                From raw civil preparation through to bespoke joinery and smart systems integration,
                Nextgen delivers every element of the interior fit-out scope under a single
                contract, a unified management team, and one accountable point of contact. This
                integrated model eliminates the coordination complexity that characterizes multi-
                vendor fit-out projects — giving clients cost certainty, schedule reliability, and
                quality consistency.
              </p>
              <p>
                Led by experienced professionals and supported by skilled trades teams, the company
                operates across commercial, hospitality, healthcare, retail, industrial, and premium
                residential segments throughout the Eastern Province.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative aspect-4/5 rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={p2}
                alt="Nextgen interior fit-out excellence"
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Eye,
              title: "Vision",
              text: "To become a leading global provider of smart, creative, and sustainable solutions in the construction industry.",
            },
            {
              icon: Target,
              title: "Mission",
              text: "To deliver innovative, sustainable design, construction, and technology solutions that enhance functionality and aesthetics.",
            },
            { icon: Sparkles, title: "Values", text: "Innovation, client-centricity, integrity, sustainability, and seamless execution define our approach to every project." },
            {
              icon: Trophy,
              title: "Goals",
              text: "Expand globally, maintain excellence, and exceed expectations through innovative solutions and sustainable growth.",
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover="hovered"
              initial="initial"
              className="p-8 rounded-2xl bg-card border border-border transition-colors group"
              style={{ boxShadow: "var(--shadow-card)" }}
              variants={{
                initial: { y: 0, borderColor: "rgba(0,0,0,0)" },
                hovered: { y: -8, borderColor: "var(--accent)" },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                variants={{
                  initial: { rotate: 0, scale: 1 },
                  hovered: { rotate: 8, scale: 1.1 },
                }}
                className="size-12 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-gold)" }}
              >
                <c.icon className="size-6 text-accent-foreground" />
              </motion.div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="pt-8 md:pt-12 pb-8 md:pb-24 border-b border-border">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
                Process
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Our Methodology</h2>
              <p className="mt-5 text-muted-foreground">
                The Nextgen way is defined by four clear phases that ensure cost-certainty and
                uncompromising finish quality.
              </p>
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

      <section className="pt-8 md:pt-12 pb-10 md:pb-16 overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col items-center text-center mb-8">
            <Reveal>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">
                National Commitment
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Vision 2030 & Leadership</h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
            {/* LEADERSHIP MESSAGES (LEFT) */}
            <Reveal
              className="relative p-8 md:p-14 rounded-3xl bg-card border border-border overflow-hidden flex flex-col space-y-12"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* KING SALMAN */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold">
                  Custodian of the Two Holy Mosques
                </span>
                <div className="mt-6 relative">
                  <div className="absolute -left-6 -top-4 text-6xl text-brand-blue/10 font-serif">
                    “
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold italic leading-relaxed text-foreground text-justify">
                    My primary goal is to be an exemplary and leading nation in all aspects, and I
                    will work with you in achieving this endeavour.
                  </h3>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-bold text-lg leading-tight">
                    King Salman Bin Abdulaziz Al-Saud
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">
                    King of Saudi Arabia
                  </p>
                </div>
              </div>

              {/* CROWN PRINCE */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold">
                  Crown Prince Message
                </span>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm font-medium text-justify">
                  <p>
                    “We commit ourselves to providing world class government services which
                    effectively and efficiently meet the needs of our citizens. Together we will
                    continue building a better country, fulfilling our dream of prosperity and
                    unlocking the talent, potential, and dedication of our young men and women. We
                    will not allow our country ever to be at the mercy of a commodity price
                    volatility or external markets.”
                  </p>
                  <p>
                    “We have all the means to achieve our dreams and ambitions. There are no excuses
                    for us to stand still or move backwards. Our Vision is a strong, thriving, and
                    stable Saudi Arabia that provides opportunity for all.”
                  </p>
                  <p className="text-[11px] text-brand-blue/70 italic border-l-2 border-brand-blue/30 pl-4 py-1">
                    We intend to provide better opportunities for partnerships with the private
                    sector through the three pillars: our position as the heart of the Arab and
                    Islamic worlds, our leading investment capabilities, and our strategic
                    geographical position.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-bold text-lg leading-tight text-foreground">
                    His Royal Highness Prince Mohammed bin Salman bin Abdulaziz
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                    Crown Prince, Deputy Prime Minister, and Chairman of the Council of Economic and
                    Development Affairs
                  </p>
                </div>
              </div>
            </Reveal>

            {/* VISION 2030 GRAPHIC (RIGHT - ONLY IMAGE) */}
            <Reveal
              delay={0.2}
              className="relative group rounded-3xl overflow-hidden min-h-[500px] bg-[#010101]"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
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
