export const languages = {
  en: { name: "English", icon: "union-jack.svg", href: "/en" },
  de: { name: "Deutsch", icon: "germany-flag.svg", href: "/de" },
};

export const defaultLang = "en";

export const ui = {
  en: {
    "introduction.location": " 📍 Based in ",
    "section.summary": "Summary",
    "section.experience": "Work Experience",
    "section.education": "Education",
    "section.skills": "Skills",
    "section.projects": "Projects",
    "skills.language": "Language",
    "skills.technical": "Technical",
    "skills.organisational": "Organisational",
    "text.final_grade": "Final grade: ",
    "text.print_hint": "This page is optimized for ",
    "text.print_highlight": "printing",
  },
  de: {
    "introduction.location": " 📍 Wohnhaft in ",
    "section.summary": "Profil",
    "section.experience": "Erfahrung",
    "section.education": "Bildung",
    "section.skills": "Skills",
    "section.projects": "Projekte",
    "skills.language": "Sprache",
    "skills.technical": "Technisch",
    "skills.organisational": "Organisatorisch",
    "text.final_grade": "Note: ",
    "text.print_hint": "Diese Seite ist optmiert zum ",
    "text.print_highlight": "Drucken",
  },
} as const;
