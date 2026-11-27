export type PageView = 'home' | 'about' | 'projects' | 'archive';

export type HomeSectionId = 'beranda' | 'tentang' | 'proyek' | 'kontak';

export type ProjectCategory = 'Semua' | 'Web App' | 'AI & Data' | 'Mobile & UI';

export type SkillCategoryKey = 'Semua' | 'Frontend' | 'Backend' | 'Cloud & Alat';

export interface SocialLink {
  id: 'github' | 'linkedin' | 'instagram' | 'email';
  label: string;
  handle: string;
  url: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface ProfileData {
  brandName: string;
  fullName: string;
  roleTitle: string;
  location: string;
  availabilityText: string;
  heroIntro: string;
  aboutSummary: string;
  projectsSummary: string;
  contactHeading: string;
  contactDescription: string;
  email: string;
  phone: string;
  portraitImage: string;
  workspaceImage: string;
  projectsBannerImage: string;
  metrics: HeroMetric[];
  socials: SocialLink[];
}

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategoryKey, 'Semua'>;
  experience: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  gpaOrNote: string;
  highlights: string[];
}

export interface AboutData {
  headline: string;
  paragraphs: string[];
  quote: {
    text: string;
    author: string;
  };
  focusTrack: {
    title: string;
    artist: string;
    mood: string;
    durationLabel: string;
  };
  skills: SkillItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'Semua'>;
  year: string;
  featured: boolean;
  role: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetric: string;
  thumbnail: string;
  gallery: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}
