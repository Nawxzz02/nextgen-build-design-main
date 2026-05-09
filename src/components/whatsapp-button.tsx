import { motion } from "framer-motion";

const PHONE = "966547800883";
const MESSAGE = "Hi Nextgen Solutions, I'd like to discuss a project.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full text-white shadow-lg"
      style={{ background: "#25D366", boxShadow: "0 10px 30px -8px rgba(37, 211, 102, 0.6)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#25D366" }} />
      <svg viewBox="0 0 24 24" className="relative size-8 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.3-.149-1.777-.878-2.047-.978-.27-.1-.466-.149-.663.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.266-.467-2.41-1.485-.89-.795-1.49-1.778-1.664-2.078-.173-.3-.018-.462.13-.61.135-.133.3-.347.45-.52.15-.174.2-.298.3-.497.1-.2.05-.374-.025-.524-.075-.15-.663-1.601-.909-2.193-.24-.58-.48-.5-.663-.51-.17-.008-.368-.01-.563-.01-.197 0-.518.074-.789.374-.27.3-1.033 1.01-1.033 2.464s1.069 2.856 1.217 3.056c.148.2 2.102 3.208 5.093 4.498.71.307 1.265.489 1.696.627.713.227 1.36.195 1.871.119.571-.085 1.777-.726 2.027-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.199-.575-.349zM12.066 22.21c-2.122 0-4.106-.57-5.815-1.566l-.417-.243-4.322 1.134 1.155-4.213-.265-.422C1.404 15.222.84 13.203.84 11.11 0.84 4.928 5.86 0 12.066 0c6.205 0 11.225 4.928 11.225 11.11 0 6.183-5.02 11.1-11.225 11.1z" />
      </svg>
    </motion.a>
  );
}
