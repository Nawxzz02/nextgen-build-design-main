import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Loader2,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { motion } from "@/components/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nextgen Solutions & Contracting" },
      {
        name: "description",
        content: "Get in touch with Nextgen Solutions & Contracting in Al Jubail, Saudi Arabia.",
      },
      { property: "og:title", content: "Contact Nextgen" },
      { property: "og:description", content: "Phone, email and address for project inquiries." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone too short").max(30),
  type: z.string().trim().min(2, "Please describe project type").max(100),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});
type FormState = z.infer<typeof schema>;

function Contact() {
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const update =
    (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormState] = i.message;
      });
      setErrors(errs);
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      setData({ name: "", email: "", phone: "", type: "", message: "" });
    }, 900);
  };

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
              Contact
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold">Let's build it.</h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl">
              Tell us about your project. We respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-page pt-20 pb-4 space-y-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: "+966 547800883", href: "tel:+966547800883" },
              {
                icon: Mail,
                label: "Email",
                value: "nextgensolutions.est@gmail.com",
                href: "mailto:nextgensolutions.est@gmail.com",
              },
              { icon: MapPin, label: "Office", value: "Al Jubail, Saudi Arabia" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href ?? "#"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent transition-colors"
              >
                <div
                  className="size-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-semibold">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-10 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Connect with us
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="size-12 rounded-xl flex items-center justify-center bg-card border border-border hover:border-accent hover:text-accent transition-all shadow-sm group"
                    title={s.label}
                  >
                    <s.icon className="size-5 transition-transform group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 md:p-10 rounded-2xl bg-card border border-border max-w-xl lg:justify-self-end w-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" value={data.name} onChange={update("name")} error={errors.name} />
              <Field
                label="Email"
                type="email"
                value={data.email}
                onChange={update("email")}
                error={errors.email}
              />
              <Field
                label="Phone"
                value={data.phone}
                onChange={update("phone")}
                error={errors.phone}
              />
              <Field
                label="Project type"
                value={data.type}
                onChange={update("type")}
                error={errors.type}
              />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={5}
                value={data.message}
                onChange={update("message")}
                maxLength={1000}
                className={`mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors.message ? "border-destructive" : "border-input"}`}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-70"
              style={{ background: "var(--gradient-gold)" }}
            >
              {status === "loading" && <Loader2 className="size-4 animate-spin" />}
              {status === "sent" && <CheckCircle2 className="size-4" />}
              {status === "sent"
                ? "Message sent"
                : status === "loading"
                  ? "Sending..."
                  : "Send Message"}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl bg-card border border-border overflow-hidden"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Office Location
            </h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115844.13622434005!2d49.5670868!3d26.9602075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e356f916726c717%3A0xb3638202970a2731!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1715247900000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        maxLength={255}
        className={`mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${error ? "border-destructive" : "border-input"}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
