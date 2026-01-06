export const languages = {
  en: { name: "English", icon: "union-jack.svg", href: "/en" },
  de: { name: "Deutsch", icon: "germany-flag.svg", href: "/de" },
};

export const defaultLang = "en";

export const ui = {
  en: {
    "introduction.location": " 📍 Based in ",
    "section.contact": "Contact",
    "section.summary": "Summary",
    "section.experience": "Work Experience",
    "section.education": "Education",
    "section.skills": "Skills",
    "section.projects": "Projects",
    "section.languages": "Languages",
    "text.final_grade": "Final grade: ",
    "text.print_hint": "This page is optimized for ",
    "text.print_highlight": "printing",
  },
  de: {
    "introduction.location": " 📍 Wohnhaft in ",
    "section.contact": "Kontakt",
    "section.summary": "Profil",
    "section.experience": "Erfahrung",
    "section.education": "Bildung",
    "section.skills": "Skills",
    "section.projects": "Projekte",
    "section.languages": "Sprachen",
    "text.final_grade": "Note: ",
    "text.print_hint": "Diese Seite ist optmiert zum ",
    "text.print_highlight": "Drucken",
  },
} as const;
