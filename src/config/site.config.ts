export const siteConfig = {
  name: 'Onur Gürsoy',
  base: '/website',
  title: 'Onur Gürsoy — Drummer & AI Engineer',
  description: 'Touring and session drummer, and AI engineer based in Hamburg.',
  location: 'Hamburg, Germany',
  hero: {
    eyebrow: 'Music meets machine learning',
    title: 'One person. Two disciplines.',
    music: { label: 'Drummer', eyebrow: 'On stage', description: 'Touring & session', action: 'Explore music', image: '/website/images/drumming-crowd-view.jpg' },
    tech: { label: 'AI Engineer', eyebrow: 'At the desk', description: 'Machine learning & software', action: 'Explore tech' },
  },
  intro: {
    title: 'Two worlds. One artist.',
    description: 'Behind the kit on stage; building intelligent systems at the desk. Explore the work in either direction.',
    music: 'Live shows, session work and recordings with RAUM27 and other artists.',
    tech: 'Machine learning, simulation and software engineering projects.',
  },
  navigation: { music: 'Music', tour: 'Tour Dates', tech: 'Projects', contact: 'Contact', musicPersona: 'DRUMMER', techPersona: 'AI ENGINEER' },
  contact: {
    title: "Let's work together",
    description: 'Touring, recording, or a technical collaboration? Get in touch.',
    action: 'Get in touch',
    email: 'contact@onurguersoy.de',
    socials: [
      { label: 'Instagram', url: 'https://www.instagram.com/onur_guersoy/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/onur-g%C3%BCrsoy-it/' },
      { label: 'GitHub', url: 'https://github.com/OnurGuersoy' },
    ],
  },
} as const;
