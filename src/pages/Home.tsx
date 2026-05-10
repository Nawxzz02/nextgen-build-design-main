import * as React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Clock,
  Wallet,
  Truck,
} from "lucide-react";
import hero from "@/assets/hero-building.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import svcConstruction from "@/assets/svc-foundation.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import svcMep from "@/assets/svc-mep.jpg";
import svcExterior from "@/assets/svc-exterior.jpg";
import svcStructural from "@/assets/svc-structural.jpg";
import svcSmart from "@/assets/svc-specialized.jpg";
import { Reveal, StaggerGroup, StaggerItem, motion } from "@/components/motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    image: svcConstruction,
    title: "Construction",
    desc: "Civil works from foundation to handover.",
    slug: "foundation",
  },
  {
    image: svcInterior,
    title: "Interior Fit-Out",
    desc: "Premium joinery, finishes and bespoke craft.",
    slug: "interior",
  },
  {
    image: svcMep,
    title: "MEP Installation",
    desc: "Electrical, plumbing, HVAC and fire systems.",
    slug: "mep",
  },
  {
    image: svcExterior,
    title: "Exterior Finishes",
    desc: "Cladding, masonry, stucco and architectural details.",
    slug: "exterior",
  },
  {
    image: svcStructural,
    title: "Structural Works",
    desc: "Engineered framing built to last.",
    slug: "structural",
  },
  {
    image: svcSmart,
    title: "Smart Systems",
    desc: "CCTV, IT networks and building automation.",
    slug: "specialized",
  },
];

const why = [
  {
    icon: Handshake,
    title: "Unified contract execution",
    desc: "One accountable contract from civil to smart systems.",
  },
  {
    icon: ShieldCheck,
    title: "Skilled and certified teams",
    desc: "Trade-certified crews under disciplined site supervision.",
  },
  {
    icon: Truck,
    title: "Just-in-time project handling",
    desc: "Material and crew flow tuned to your milestones.",
  },
  {
    icon: Wallet,
    title: "Cost-effective solutions",
    desc: "Engineered value without compromising finish quality.",
  },
  {
    icon: Clock,
    title: "Reliable on-time delivery",
    desc: "Programmed schedules with weekly progress transparency.",
  },
];

const clients = [
  "ARAMCO",
  "SABIC",
  "Royal Commission",
  "Ma'aden",
  "NEOM",
  "Red Sea",
  "PIF",
  "STC",
  "Almarai",
  "Saudi Electricity",
  "Tasnee",
  "Bahri",
];

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const target = parseInt(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  React.useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={hero}
            alt="Modern luxury building at dusk"
            width={1920}
            height={1080}
            className="size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, oklch(0.13 0.03 265 / 0.92) 0%, oklch(0.13 0.03 265 / 0.7) 50%, oklch(0.13 0.03 265 / 0.4) 100%)",
            }}
          />
        </motion.div>
        <div className="relative container-page pt-28 pb-20 md:pt-56 md:pb-40">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Al Jubail · Saudi Arabia
            </div>
            <h1 className="mt-6 text-4xl md:text-7xl font-bold text-white leading-[1.05]">
              Framing Dreams,
              <br />
              <span className="text-gradient-gold">Building Reality.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Interior Fit-Out · Construction · MEP Solutions — delivered as one integrated,
              accountable contract.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition"
                style={{ background: "var(--gradient-gold)" }}
              >
                View Projects <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="container-page pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
              About
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              One contractor. Civil to smart systems.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Nextgen Solutions & Contracting Est. is an Al Jubail–based contractor delivering an
              integrated model — Civil → Joinery → Smart Systems — under a single point of contact.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Single point of contact",
                "Cost certainty + quality consistency",
                "Integrated multi-trade execution",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="relative aspect-3/2 rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={p1}
                alt="Luxury interior"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES with images */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
                Services
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Capabilities under one roof.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors mb-2"
              >
                Explore all services <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.02}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent transition-colors"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="aspect-4/3 overflow-hidden">
                      <motion.img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="size-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                        Learn more{" "}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-page pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
              Why Nextgen
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              A partner, not just a contractor.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Five reasons clients choose us for projects where reliability, cost discipline and
              finish quality cannot be compromised.
            </p>
            <Reveal delay={0.2} className="mt-8">
              <div
                className="aspect-16/10 rounded-2xl overflow-hidden border border-border"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={p4}
                  alt="Construction excellence"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </Reveal>
          <div className="space-y-4 md:pt-14">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={0.05}>
                <motion.div
                  whileHover={{ x: 6, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="size-12 rounded-xl flex items-center justify-center text-accent-foreground shrink-0"
                    style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-card)" }}
                  >
                    <w.icon className="size-6" />
                  </motion.span>
                  <div className="flex-1">
                    <div className="font-semibold text-base">{w.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
            {/* CLIENTS */}
      <section className="pt-12 md:pt-20 pb-4 md:pb-6 overflow-hidden">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-6">
                Trusted by leading organizations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center">
                Global Partners.
              </h2>
            </div>
          </Reveal>
          <div
            className="relative mt-10 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex gap-4 w-max animate-scroll-marquee">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={`${c}-${i}`}
                  className="h-20 w-48 shrink-0 rounded-lg border border-border bg-card flex items-center justify-center text-sm font-bold tracking-wider text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* PORTFOLIO */}
      <section className="pt-12 md:pt-20 pb-4 md:pb-5">
        <div className="container-page">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
                  Portfolio
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recent work.</h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[p1, p2, p3, p4].slice(0, 3).map((src, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-4/5 overflow-hidden rounded-xl"
                >
                  <motion.img
                    src={src}
                    alt="Project"
                    loading="lazy"
                    className="size-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>


      {/* TESTIMONIALS & STATS */}
      <section className="container-page py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
          {/* TESTIMONIALS */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mb-4">
                  Proven Success
                </span>
                <h2 className="text-3xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-200">
                  Fast-Track Your <br /> Construction.
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                  At Nextgen Solutions, we ensure a swift start with integrated trade management. Experience the speed of construction redefined through our unified delivery model.
                </p>
              </div>

              <div className="relative">
                <Carousel setApi={setApi} opts={{ loop: true }}>
                  <CarouselContent>
                    {[
                      {
                        content: "Nextgen's integrated model — handling civil, interior, and MEP under one roof — drastically reduced our coordination overhead and saved us weeks on the schedule.",
                        author: "Samantha Ruiz",
                        role: "Chief Operating Officer | ConstructIt Inc.",
                        avatar: "S"
                      },
                      {
                        content: "The quality of their bespoke joinery and interior finishes is unmatched in Al Jubail. Reliable, transparent, and strictly on-time.",
                        author: "James Chen",
                        role: "Project Director | Industrial Sector",
                        avatar: "J"
                      }
                    ].map((t, i) => (
                      <CarouselItem key={i}>
                        <blockquote className="relative">
                          {/* Quotation Icon Replica */}
                          <div className="absolute -top-4 -left-2 text-4xl text-neutral-200 dark:text-neutral-800 pointer-events-none font-serif">
                            &ldquo;
                          </div>
                          
                          <div className="relative z-10">
                            <p className="text-xl text-neutral-800 italic dark:text-neutral-200 leading-relaxed">
                              {t.content}
                            </p>
                          </div>

                          <div className="mt-6">
                            <div className="flex items-center">
                              <div className="size-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shrink-0">
                                {t.avatar}
                              </div>
                              <div className="ms-4 grow">
                                <div className="font-bold text-neutral-800 dark:text-neutral-200">
                                  {t.author}
                                </div>
                                <div className="text-xs text-neutral-500">
                                  {t.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </blockquote>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                
                {/* Carousel Pagination Dots */}
                <div className="flex gap-2 mt-8">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        index === selectedIndex ? "bg-accent w-8" : "bg-neutral-300 dark:bg-neutral-700 w-4"
                      )}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* STATISTICS */}
          <div className="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
            <Reveal delay={0.2}>
              <div className="space-y-3 sm:space-y-3">
                <ul className="grid grid-cols-2 divide-x divide-y divide-neutral-300 dark:divide-neutral-300 overflow-hidden border border-neutral-300 dark:border-neutral-700 rounded-xl">
                  {[
                    {
                      count: "250+",
                      description: "Projects completed across residential and commercial sectors",
                    },
                    {
                      count: "35%",
                      description: "Faster delivery through our integrated trade management",
                    },
                    {
                      count: "100%",
                      description: "Safety record maintained across all construction sites",
                    },
                    {
                      count: "500+",
                      description: "Experts team dedicated to precision and quality",
                    },
                  ].map((stat, i) => (
                    <motion.li 
                      key={i} 
                      className="p-6 sm:p-10 md:p-12 cursor-pointer transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50 relative overflow-hidden group"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight mb-2 group-hover:text-accent transition-colors">
                        <Counter value={stat.count} />
                      </div>
                      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {stat.description}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pt-8 md:pt-12 pb-6 md:pb-12">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-14 text-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <motion.div
              className="absolute -top-24 -right-24 size-96 rounded-full opacity-20"
              style={{ background: "var(--gradient-gold)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground">
              Start Your Project With NextGen
            </h2>
            <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              From a single trade to a full turn-key build — talk to our team in Al Jubail.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-accent-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              Request a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
