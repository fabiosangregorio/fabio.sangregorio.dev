export interface Meta {
  title: string;
  description: string;
}

export interface Header {
  langlink: string;
  about: string;
  contact: string;
}

export interface Footer {
  title: string;
  goodbye: string;
}

export interface Experience {
  title: string;
  link: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Competition {
  year: string;
  title: string;
  description: string;
}

export interface ItemLink {
  url: string;
  title: string;
}

export interface ItemImage {
  path: string;
  alt: string;
  description: string;
}

export interface AboutItem {
  title?: string;
  description?: string;
  link?: ItemLink;
  image?: ItemImage;
}

export interface AboutSection {
  title: string;
  description: string;
  items: AboutItem[];
}

export interface SiteModel {
  lang: 'en' | 'it';
  meta: Meta;
  header: Header;
  footer: Footer;
  email_alt: string;
  home: {
    title: { line1: string; line2: string };
    subtitle: string;
    jobs: string;
    education: string;
    skills: string;
    competitions: string;
    about: { title: string; link: string };
  };
  about: {
    title: { line1: string; line2: string };
    notes: { line1: string; line2: string };
    description: string;
  };
  jobs: Experience[];
  education: Experience[];
  skills: Skill[];
  competitions: Competition[];
  coding: AboutSection;
  photography: AboutSection;
  drawing: AboutSection;
}
