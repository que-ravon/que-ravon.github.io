// identity, links and seo. the content itself lives in src/content.

export const site = {
  name: "Naman Goyal",
  headline: "Electrical Engineering, IIT Delhi",
  affiliation: "Indian Institute of Technology Delhi",
  location: "New Delhi, India",
  email: "mail.namangoyal@gmail.com",
  cv: "/Naman_Goyal_CV.pdf",

  // shown in the sidebar on the home page, in this order. icon names map to src/components/Icon.astro
  links: [
    { label: "Email", href: "mailto:mail.namangoyal@gmail.com", icon: "mail" },
    { label: "GitHub", href: "https://github.com/que-ravon", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/namangoyalo", icon: "linkedin" },
    { label: "ORCID", href: "https://orcid.org/0009-0007-3300-6213", icon: "orcid" },
    { label: "Curriculum Vitae", href: "/cv/", icon: "file" },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research/" },
    { label: "Experience", href: "/experience/" },
    { label: "Achievements", href: "/achievements/" },
    { label: "Writing", href: "/writing/" },
    { label: "CV", href: "/cv/" },
  ],

  seo: {
    title: "Naman Goyal",
    description:
      "Naman Goyal is an Electrical Engineering undergraduate at IIT Delhi, ranked first in his department, and an incoming Software Engineering Intern at Virtu Financial. He works on low-latency systems, FPGA design and quantum algorithms.",
    keywords: [
      "Naman Goyal",
      "Naman Goyal IIT Delhi",
      "IIT Delhi",
      "Electrical Engineering",
      "Virtu Financial",
      "software engineer",
      "low latency systems",
      "C++",
      "FPGA",
      "SystemVerilog",
      "formal verification",
      "tick to trade",
      "RISC-V",
      "hardware security",
      "CISPA",
      "quantum algorithms",
      "quantum query complexity",
      "minimum weight cycle",
      "competitive programming",
    ],
    ogImage: "/og-image.png",
  },

  // extra profiles for schema.org sameAs. add any profile that is really yours.
  profiles: [
    "https://github.com/que-ravon",
    "https://www.linkedin.com/in/namangoyalo",
    "https://orcid.org/0009-0007-3300-6213",
  ],

  verification: { google: "", bing: "" },
} as const;
