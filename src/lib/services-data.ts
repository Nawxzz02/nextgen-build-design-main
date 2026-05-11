import foundation from "@/assets/svc-foundation.jpg";
import structural from "@/assets/svc-structural.jpg";
import enclosure from "@/assets/svc-enclosure.jpg";
import exterior from "@/assets/svc-exterior.jpg";
import mep from "@/assets/svc-mep.jpg";
import interior from "@/assets/svc-interior.jpg";
import specialized from "@/assets/svc-specialized.jpg";

export type SubService = {
  name: string;
  description: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
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
    title: "CIVIL CONSTRUCTION",
    short: "Comprehensive civil works and structural foundations.",
    image: foundation,
    sections: [
      {
        heading: "Foundations",
        items: [
          sub(
            "Site Preparation",
            "Clearing, grading and surveying the plot to receive the structure on stable, level ground.",
            foundation,
          ),
          sub(
            "Excavation",
            "Mechanical excavation to engineered depths with shoring and dewatering as required.",
            foundation,
          ),
          sub(
            "Footing Installation",
            "Reinforced footings sized to soil bearing capacity and structural loads.",
            foundation,
          ),
        ],
      },
      {
        heading: "Structural",
        items: [
          sub(
            "Reinforcement",
            "Cut, bent and tied rebar cages placed to spec with full QA inspection.",
            structural,
          ),
          sub(
            "Structural Framing",
            "Precision steel and concrete frames that define the building's skeleton.",
            structural,
          ),
          sub(
            "Wall & Floor Systems",
            "Composite slabs, decks and load-bearing partitions assembled for performance.",
            structural,
          ),
        ],
      },
    ],
  },
  {
    slug: "waterproofing",
    title: "WATERPROOFING",
    short: "Advanced membrane and coating protection systems.",
    image: enclosure,
    sections: [
      {
        items: [
          sub(
            "Foundation Protection",
            "Membrane and coating systems protecting the substructure from moisture ingress.",
            foundation,
          ),
          sub(
            "Roof Systems",
            "Single-ply, modified bitumen or metal roofing with full flashing details.",
            enclosure,
          ),
          sub(
            "Thermal Sealing",
            "Closed-cell spray foam for thermal performance and air sealing.",
            specialized,
          ),
          sub(
            "Façade Joint Sealing",
            "Joint sealing and barrier installation across the building envelope.",
            exterior,
          ),
        ],
      },
    ],
  },
  {
    slug: "hvac-systems",
    title: "HVAC SYSTEMS",
    short: "Precision cooling, heating, and ventilation solutions.",
    image: mep,
    sections: [
      {
        items: [
          sub(
            "Cooling Solutions",
            "VRF, chilled water or DX systems with commissioning and balancing.",
            mep,
          ),
          sub(
            "Heating & Ventilation",
            "Fresh air handling units and exhaust systems for superior air quality.",
            mep,
          ),
          sub(
            "Ductwork Fabrication",
            "Insulated GI or pre-insulated ducting executed to SMACNA standards.",
            mep,
          ),
          sub(
            "Climate Control",
            "Thermostatic controls and BMS integration for climate efficiency.",
            mep,
          ),
        ],
      },
    ],
  },
  {
    slug: "interior-finishes",
    title: "INTERIOR FINISHES",
    short: "Premium fit-out, joinery, and bespoke craftsmanship.",
    image: interior,
    sections: [
      {
        items: [
          sub(
            "Drywall & Partitions",
            "High-grade partition and ceiling drywall taped, sanded and finished to L4/L5.",
            interior,
          ),
          sub(
            "Bespoke Joinery",
            "Bespoke cabinetry and built-in units from our in-house workshop.",
            interior,
          ),
          sub(
            "Flooring & Stone",
            "Hardwood, marble, vinyl or tile installed on prepared substrates.",
            interior,
          ),
          sub(
            "Decorative Finishes",
            "Decorative gypsum ceilings, bulkheads and feature walls with premium paint.",
            specialized,
          ),
        ],
      },
    ],
  },
  {
    slug: "exterior-finishes",
    title: "EXTERIOR FINISHES",
    short: "Architectural facades, cladding, and masonry works.",
    image: exterior,
    sections: [
      {
        items: [
          sub(
            "Modern Cladding",
            "Composite, fiber-cement or metal cladding systems for modern facades.",
            exterior,
          ),
          sub(
            "Masonry & Stonework",
            "Hand-laid brick and stone executed by master masons.",
            exterior,
          ),
          sub(
            "Stucco & EIFS",
            "Energy-efficient exterior insulation and finish systems.",
            exterior,
          ),
          sub(
            "Architectural Glazing",
            "Performance glazing and door assemblies for thermal and acoustic isolation.",
            enclosure,
          ),
        ],
      },
    ],
  },
  {
    slug: "mep-installations",
    title: "MEP INSTALLATIONS",
    short: "Integrated mechanical, electrical, and plumbing systems.",
    image: mep,
    sections: [
      {
        heading: "Plumbing Systems",
        items: [
          sub(
            "Water Supply",
            "Hot and cold supply networks installed, pressure-tested and balanced.",
            mep,
          ),
          sub(
            "Sanitary Drainage",
            "Soil, waste and vent stacks installed to fall with full leak testing.",
            mep,
          ),
        ],
      },
      {
        heading: "Life Safety",
        items: [
          sub(
            "Fire Suppression",
            "Wet, dry and pre-action sprinkler systems installed to NFPA codes.",
            mep,
          ),
          sub(
            "Detection Systems",
            "Addressable fire alarm and detection systems with full testing.",
            mep,
          ),
        ],
      },
    ],
  },
  {
    slug: "it-solutions",
    title: "IT SOLUTIONS",
    short: "Smart networking, CCTV, and building automation.",
    image: specialized,
    sections: [
      {
        items: [
          sub(
            "Networking Infrastructure",
            "Structured cabling, racks and Wi-Fi backbones certified and labeled.",
            specialized,
          ),
          sub(
            "Surveillance Systems",
            "IP camera systems with NVR, analytics and remote monitoring.",
            specialized,
          ),
          sub(
            "Security & Access",
            "Biometric and card-based security systems for restricted areas.",
            specialized,
          ),
          sub(
            "BMS Automation",
            "Building Management Systems for integrated HVAC and lighting control.",
            mep,
          ),
        ],
      },
    ],
  },
  {
    slug: "electrical-solution",
    title: "ELECTRICAL SOLUTION",
    short: "Power distribution, lighting, and electrical engineering.",
    image: mep,
    sections: [
      {
        items: [
          sub(
            "Power Distribution",
            "Distribution boards and main panels assembled, labeled and energized.",
            mep,
          ),
          sub(
            "Electrical Infrastructure",
            "LV and ELV wiring pulled, terminated and tested to IEC standards.",
            mep,
          ),
          sub(
            "Smart Lighting",
            "Architectural and functional lighting with automated control scenes.",
            mep,
          ),
          sub(
            "Earthing & Protection",
            "Protective earthing systems and lightning protection for site safety.",
            mep,
          ),
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
