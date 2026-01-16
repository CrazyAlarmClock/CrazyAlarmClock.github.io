import { LucideIcon } from "lucide-react";

export interface ProjectItem {
  name: string;
  role: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  subsections?: {
    title: string;
    items: string[];
  }[];
  projects?: ProjectItem[];
  achievements?: string[];
}

export interface HackathonItem {
  title: string;
  award: string;
  track?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
}