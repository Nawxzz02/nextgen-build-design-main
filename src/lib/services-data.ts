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

const sub = (name: string, description: string, image: string): SubService => ({ name, description, image });

export const services: Service[] = [
  {
    slug: "foundation",
    title: "Foundation Construction",
    short: "Engineered groundwork built for permanence.",
    image: foundation,
    sections: [{ items: [
      sub("Site Preparation", "Clearing, grading and surveying the plot to receive the structure on stable, level ground.", foundation),
      sub("Excavation", "Mechanical excavation to engineered depths with shoring and dewatering as required.", foundation),
      sub("Footing Installation", "Reinforced footings sized to soil bearing capacity and structural loads.", foundation),
      sub("Reinforcement", "Cut, bent and tied rebar cages placed to spec with full QA inspection.", foundation),
      sub("Foundation Walls", "Cast-in-place or block foundation walls forming the basement envelope.", foundation),
      sub("Slab-on-grade", "Compacted sub-base, vapor barrier and reinforced concrete slab placement.", foundation),
      sub("Waterproofing", "Membrane and coating systems protecting the substructure from moisture ingress.", foundation),
      sub("Inspection Process", "Stage-wise inspection and approvals before any concealment work.", foundation),
    ]}],
  },
  {
    slug: "structural",
    title: "Structural Framing",
    short: "Precision steel and concrete frames that define the build.",
    image: structural,
    sections: [{ items: [
      sub("Wall Framing", "Load-bearing and partition framing in steel or timber to engineered drawings.", structural),
      sub("Floor Systems", "Composite slabs, decks and joists assembled for required spans and loads.", structural),
      sub("Column Installation", "Plumb, aligned columns set to grid with welded or bolted connections.", structural),
      sub("Beam Placement", "Primary and secondary beams erected with certified rigging crews.", structural),
      sub("Roof Framing", "Trusses and rafters forming the roof skeleton ready for enclosure.", structural),
      sub("Engineering Precision", "Survey-controlled tolerances at every connection and elevation.", structural),
      sub("Material Selection", "Mill-certified steel and graded materials traceable to project specs.", structural),
      sub("Quality Control", "Weld inspection, torque checks and dimensional verification at handover.", structural),
    ]}],
  },
  {
    slug: "enclosure",
    title: "Enclosure Work",
    short: "Sealed, insulated and weather-tight building envelopes.",
    image: enclosure,
    sections: [{ items: [
      sub("Exterior Walls", "Cladding and curtain wall systems delivering performance and aesthetics.", enclosure),
      sub("Roofing", "Single-ply, modified bitumen or metal roofing with full flashing details.", enclosure),
      sub("Windows & Doors", "Performance glazing and door assemblies installed plumb and air-tight.", enclosure),
      sub("Insulation", "Thermal and acoustic insulation tuned to energy and comfort targets.", enclosure),
      sub("Weatherproofing", "Sealants, membranes and flashings forming a continuous water-tight barrier.", enclosure),
      sub("Sustainable Materials", "Low-embodied-carbon options aligned with green-building credentials.", enclosure),
    ]}],
  },
  {
    slug: "exterior",
    title: "Exterior Finishes",
    short: "Architectural facades that elevate the first impression.",
    image: exterior,
    sections: [{ items: [
      sub("Siding", "Composite, fiber-cement or metal siding installed to weather-board standards.", exterior),
      sub("Brickwork & Masonry", "Hand-laid brick and stone executed by certified masons.", exterior),
      sub("Architectural Details", "Cornices, trims and feature elements that articulate the facade.", exterior),
      sub("Landscaping", "Hard and soft landscape integrating the building with its site.", exterior),
      sub("Exterior Coatings", "High-performance paint and protective coatings rated for KSA climate.", exterior),
      sub("Stucco", "Three-coat stucco systems with consistent texture and color.", exterior),
      sub("Weatherproofing", "Joint sealing and barrier installation across the facade.", exterior),
    ]}],
  },
  {
    slug: "mep",
    title: "MEP Installation",
    short: "Mechanical, electrical and plumbing systems engineered as one.",
    image: mep,
    sections: [
      { heading: "Electrical", items: [
        sub("Wiring", "LV and ELV wiring pulled, terminated and tested to IEC standards.", mep),
        sub("Panels", "Distribution boards and main panels assembled, labeled and energized.", mep),
        sub("Lighting", "Architectural and functional lighting installed with controls and scenes.", mep),
      ]},
      { heading: "Plumbing", items: [
        sub("Water Supply", "Hot and cold supply networks installed, pressure-tested and balanced.", mep),
        sub("Drainage", "Soil, waste and vent stacks installed to fall with full leak testing.", mep),
      ]},
      { heading: "HVAC", items: [
        sub("Heating", "Boilers, heaters and distribution systems sized to load calculations.", mep),
        sub("Cooling Systems", "VRF, chilled water or DX systems with commissioning and balancing.", mep),
      ]},
      { heading: "Fire Protection", items: [
        sub("Sprinklers", "Wet, dry and pre-action sprinkler systems installed to NFPA codes.", mep),
        sub("Alarms", "Addressable fire alarm and detection systems with full cause-and-effect testing.", mep),
      ]},
      { heading: "Smart Systems", items: [
        sub("Automation", "BMS-driven automation for HVAC, lighting and occupancy.", mep),
        sub("Energy Management", "Sub-metering and analytics that drive measurable energy savings.", mep),
      ]},
    ],
  },
  {
    slug: "interior",
    title: "Interior Finishes",
    short: "Premium fit-out where craft meets material.",
    image: interior,
    sections: [{ items: [
      sub("Drywall", "Partition and ceiling drywall taped, sanded and finished to L4/L5.", interior),
      sub("Cabinetry", "Bespoke joinery and built-in cabinetry from in-house workshop.", interior),
      sub("Flooring", "Hardwood, stone, vinyl or tile installed on prepared substrates.", interior),
      sub("Painting", "Multi-coat paint systems delivering even sheen and color uniformity.", interior),
      sub("Fixtures", "Sanitaryware, lighting fixtures and hardware installed and commissioned.", interior),
      sub("Trim & Molding", "Skirting, cornicing and feature trims fitted with mitre precision.", interior),
      sub("Tiles & Backsplash", "Wet-area and feature tile work with consistent grout and joint lines.", interior),
    ]}],
  },
  {
    slug: "specialized",
    title: "Specialized Works",
    short: "Smart, secure and specialty trade execution.",
    image: specialized,
    sections: [{ items: [
      sub("CCTV Surveillance", "IP camera systems with NVR, analytics and remote monitoring.", specialized),
      sub("IT Networking", "Structured cabling, racks and Wi-Fi backbones certified and labeled.", specialized),
      sub("Gypsum Work", "Decorative gypsum ceilings, bulkheads and feature walls.", specialized),
      sub("Flooring Work", "Specialty flooring including epoxy, raised access and resin systems.", specialized),
      sub("Paint Work", "Decorative finishes including faux, metallic and high-build coatings.", specialized),
      sub("Polyurethane Spray Foam", "Closed-cell spray foam for thermal performance and air sealing.", specialized),
      sub("Block & Masonry", "Block walls and masonry partitions with reinforcement and lintels.", specialized),
    ]}],
  },
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
