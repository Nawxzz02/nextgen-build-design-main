import foundation from "@/assets/svc-foundation.jpg";
import structural from "@/assets/svc-structural.jpg";
import enclosure from "@/assets/svc-enclosure.jpg";
import exterior from "@/assets/svc-exterior.jpg";
import mep from "@/assets/svc-mep.jpg";
import interior from "@/assets/svc-interior.jpg";
import specialized from "@/assets/svc-specialized.jpg";
import itSolutions from "@/assets/it-solutions.jpg";

export type SubService = {
  name: string;
  description: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  overview?: string;
  image: string;
  sections: { heading?: string; items: SubService[] }[];
};

const sub = (name: string, description: string, image: string): SubService => ({
  name,
  description,
  image,
});

export const services: Service[] = [
  {
    slug: "civil-construction",
    title: "CIVIL CONSTRUCTIONS",
    short: "Comprehensive civil works and structural foundations.",
    overview: `Building Excellence Across Saudi Arabia\n\nNextgen Solutions and Contracting Est. is a trusted civil construction and contracting company in the Kingdom of Saudi Arabia, delivering high-quality construction, waterproofing, maintenance, and industrial solutions for residential, commercial, and industrial projects.\n\nWith a commitment to quality workmanship, safety, and timely project execution, we provide reliable engineering and construction services tailored to meet the growing demands of modern infrastructure and development.`,
    image: foundation,
    sections: [],
  },
  {
    slug: "waterproofing",
    title: "WATERPROOFING",
    short: "Advanced membrane and coating protection systems.",
    overview: `Nextgen Solutions and Contracting Est. provides professional waterproofing and roofing solutions for residential, commercial, and industrial projects across the Kingdom of Saudi Arabia. With experienced technical teams and high-quality materials, we deliver durable waterproofing systems designed to withstand the harsh Saudi climate.\n\nOur services include bituminous membrane waterproofing, polyurethane spray insulation, PVC membrane systems, and EPDM membrane installation for roofs, foundations, wet areas, water tanks, and industrial structures.\n\nAt Nextgen Solutions and Contracting Est., we are committed to delivering reliable waterproofing solutions that ensure long-term protection, structural durability, and complete customer satisfaction through quality workmanship and professional service.`,
    image: enclosure,
    sections: [],
  },
  {
    slug: "hvac-systems",
    title: "HVAC SYSTEMS",
    short: "Precision cooling, heating, and ventilation solutions.",
    overview: `Nextgen Solutions and Contracting Est. provides reliable and energy-efficient HVAC solutions for residential, commercial, and industrial projects across the Kingdom of Saudi Arabia. We specialize in the installation, maintenance, repair, and supply of advanced heating, ventilation, and air conditioning systems designed to deliver maximum comfort, efficiency, and performance.\n\nWith experienced technicians, modern equipment, and high-quality materials, we ensure every HVAC project is completed according to international standards and client requirements.`,
    image: mep,
    sections: [],
  },
  {
    slug: "interior-finishing",
    title: "INTERIOR FINISHING",
    short: "Premium fit-out, joinery, and bespoke craftsmanship.",
    overview: `Nextgen Solutions and Contracting Est. provides premium interior finishing solutions for residential, commercial, hospitality, and industrial projects across the Kingdom of Saudi Arabia. We specialize in delivering modern, functional, and aesthetically appealing interior spaces with high-quality workmanship and attention to detail.\n\nWith experienced professionals, skilled craftsmen, and quality materials, we transform interiors into elegant and practical environments tailored to meet our clients’ vision and project requirements.`,
    image: interior,
    sections: [
      {
        heading: "Services Include",
        items: [
          sub("Gypsum Board Ceilings", "High-grade gypsum board ceilings taped, sanded and finished.", interior),
          sub("Decorative Ceiling Designs", "Bespoke decorative ceilings with premium paint and finishing.", interior),
          sub("Bulkhead & Cove Lighting", "Architectural bulkheads integrated with hidden cove lighting.", specialized),
          sub("Gypsum Partition Walls", "Durable gypsum partition walls for efficient space division.", interior),
          sub("Acoustic Ceiling Systems", "Acoustic ceiling panels for sound isolation and control.", interior),
          sub("Suspended Ceilings", "Versatile suspended ceiling grid systems.", interior),
        ],
      },
    ],
  },
  {
    slug: "exterior-finishing",
    title: "EXTERIOR FINISHING",
    short: "Architectural facades, cladding, and masonry works.",
    overview: `Nextgen Solutions and Contracting Est. provides high-quality exterior finishing and façade solutions for residential, commercial, and industrial projects across the Kingdom of Saudi Arabia. We specialize in creating durable, modern, and visually appealing exterior finishes designed to withstand harsh weather conditions while enhancing the beauty and value of every structure.\n\nWith skilled professionals, advanced equipment, and premium materials, we deliver exterior finishing solutions that combine aesthetics, protection, and long-term performance.`,
    image: exterior,
    sections: [],
  },
  {
    slug: "mep-solutions",
    title: "MEP SOLUTIONS",
    short: "Integrated mechanical, electrical, and plumbing systems.",
    overview: `Nextgen Solutions and Contracting Est. provides complete Mechanical, Electrical, and Plumbing (MEP) installation solutions for residential, commercial, industrial, and infrastructure projects across the Kingdom of Saudi Arabia. We deliver reliable, efficient, and high-quality MEP systems designed to meet modern engineering standards and project requirements.\n\nWith experienced engineers, skilled technicians, and advanced installation methods, we ensure every MEP project is executed with precision, safety, and long-term operational performance.`,
    image: mep,
    sections: [],
  },
  {
    slug: "it-solutions",
    title: "IT SOLUTIONS",
    short: "Smart networking, infrastructure, and business technology.",
    overview: `Nextgen Solutions and Contracting Est. provides reliable and innovative IT solutions for businesses, commercial facilities, industrial operations, and organizations across the Kingdom of Saudi Arabia. We deliver advanced technology services designed to improve connectivity, security, efficiency, and business performance.\n\nWith experienced IT professionals, modern technologies, and customer-focused solutions, we help organizations build secure and scalable digital infrastructure tailored to their operational needs.`,
    image: itSolutions,
    sections: [
      {
        heading: "Services Include",
        items: [
          sub("Structured Cabling Systems", "Professional structured cabling for robust and organized network infrastructure.", itSolutions),
          sub("LAN & WAN Setup", "Local and Wide Area Network configuration and deployment.", itSolutions),
          sub("Fiber Optic Installation", "High-speed fiber optic cable laying, splicing, and testing.", itSolutions),
          sub("Wi-Fi Network Solutions", "Enterprise-grade wireless network design and implementation.", itSolutions),
          sub("Server Room Setup", "Complete server room build-outs including power and cooling.", itSolutions),
          sub("Network Rack Installation", "Secure and organized network rack assembly and patching.", itSolutions),
          sub("Data Center Support", "Ongoing maintenance and support for data center operations.", itSolutions),
          sub("Network Troubleshooting & Maintenance", "Rapid response troubleshooting and preventative maintenance.", itSolutions),
        ],
      },
    ],
  },
  {
    slug: "cctv-security-systems",
    title: "CCTV & SECURITY SYSTEMS",
    short: "Advanced surveillance and security solutions.",
    overview: `Nextgen Solutions and Contracting Est. provides professional and high-performance CCTV and security systems solutions for residential, commercial, industrial, and public facility projects across the Kingdom of Saudi Arabia. We deliver state-of-the-art surveillance, access control, and security monitoring infrastructure designed to protect assets, secure properties, and ensure optimal safety.\n\nWith experienced security integration specialists, high-resolution technologies, and responsive support systems, we build fully compliant, robust security configurations tailored to local standards and our client's unique operational needs.`,
    image: specialized,
    sections: [
      {
        heading: "Security Solutions",
        items: [
          sub("CCTV Camera Installation", "Strategic placement and installation of high-definition analog and IP cameras.", specialized),
          sub("IP Surveillance Systems", "Network-based surveillance systems with NVR and remote access.", specialized),
          sub("Video Monitoring Systems", "Centralized video monitoring stations for real-time security.", specialized),
          sub("Access Control Systems", "Card, fob, and keypad entry systems to secure restricted areas.", specialized),
          sub("Biometric Attendance Systems", "Fingerprint and facial recognition for time and attendance tracking.", specialized),
          sub("Gate Barrier Systems", "Automated boom barriers and turnstiles for vehicle and pedestrian control.", specialized),
          sub("Smart Security Solutions", "Integrated security systems with smart alerts and automation.", specialized),
        ],
      },
    ],
  },
  {
    slug: "electrical-solutions",
    title: "ELECTRICAL SOLUTIONS",
    short: "Power distribution, lighting, and electrical engineering.",
    overview: `Nextgen Solutions and Contracting Est. provides reliable and high-quality electrical solutions for residential, commercial, industrial, and infrastructure projects across the Kingdom of Saudi Arabia. We specialize in electrical installation, maintenance, testing, and power distribution systems designed to ensure safety, efficiency, and long-term performance.\n\nWith experienced electrical engineers, skilled technicians, and modern equipment, we deliver professional electrical services that meet Saudi and international standards.`,
    image: mep,
    sections: [
      {
        heading: "Services Include",
        items: [
          sub("Power Distribution Systems", "Distribution boards and main panels assembled, labeled and energized.", mep),
          sub("Electrical Wiring & Cabling", "LV and ELV wiring pulled, terminated and tested to IEC standards.", mep),
          sub("Lighting Installation", "Comprehensive indoor and outdoor lighting installations.", mep),
          sub("Cable Tray & Trunking Works", "Professional cable management solutions.", mep),
          sub("Panel Board Installation", "Installation of electrical control and breaker panels.", mep),
          sub("Switchgear Installation", "Medium and low voltage switchgear systems.", mep),
          sub("Industrial Electrical Works", "Heavy-duty electrical installations for industrial plants.", mep),
          sub("Temporary Power Solutions", "Site power provisions for construction and events.", mep),
        ],
      },
      {
        heading: "Lighting Services",
        items: [
          sub("LED Lighting Installation", "Energy-efficient LED fixtures and retrofits.", mep),
          sub("Commercial Lighting Systems", "Optimized lighting designs for retail and office spaces.", mep),
          sub("Industrial Lighting Solutions", "High-bay and robust lighting for warehouses and factories.", mep),
          sub("Decorative Lighting", "Aesthetic lighting elements for hospitality and residential spaces.", mep),
          sub("Street & Landscape Lighting", "Outdoor illumination for roads, pathways, and gardens.", mep),
          sub("Emergency Lighting Systems", "Battery-backed exit and emergency lights for safety compliance.", mep),
          sub("Smart Lighting Controls", "Automated scenes, dimming, and sensor-based lighting controls.", mep),
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
