import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

export function SiteFooter() {
  return (
    <footer
      className="mt-6 md:mt-12 border-t border-white/10 text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img
            src={footerLogo}
            alt="Nextgen Solutions & Contracting"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Integrated construction, fit-out, MEP and smart systems delivery across Saudi Arabia.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Linkedin className="size-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Facebook className="size-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Twitter className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Construction</li>
            <li>Interior Fit-Out</li>
            <li>MEP Installation</li>
            <li>Smart Systems</li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 shrink-0" /> +966 547800883
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 shrink-0" /> nextgensolutions.est@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" /> Al Jubail, Saudi Arabia
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/60 flex flex-col md:flex-row gap-2 justify-between">
          <span>
            © {new Date().getFullYear()} Nextgen Solutions & Contracting Est. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
