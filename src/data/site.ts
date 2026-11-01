/**
 * Site-wide configuration and external links.
 *
 * Single source of truth for identity, SEO metadata, and social/resume URLs.
 * Intentionally contains NO email address or phone number (privacy).
 */
export const site = {
  name: "Sahil Sood",
  title: "Sahil Sood | Senior Android Engineer & Mobile Team Lead",
  description:
    "Sahil Sood is a Senior Android Engineer & Mobile Team Lead building scalable mobile apps.",
  themeColor: "#08080c",
  copyright: "© 2026 Sahil Sood. All rights reserved.",
  resumeUrl: "https://sahilsood.com/SahilSoodResume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/sahilsood28/",
    github: "https://github.com/sahilsood/",
    x: "https://x.com/sahil_sood28",
  },
} as const;
