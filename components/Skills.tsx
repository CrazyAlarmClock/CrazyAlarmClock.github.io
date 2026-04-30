import React from 'react';
import { Reveal } from './ui/Reveal';
import { SkillCategory } from '../types';
import { Smartphone, Server, Cpu, Briefcase, Code, Terminal } from 'lucide-react';

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter (Expert)", "Dart", "iOS", "Android", "Platform Channels", "Clean Architecture", "SOLID", "Server Driven UI"]
  },
  {
    title: "Backend on Dart",
    icon: Server,
    skills: ["Server-side Dart", "Dart Frog", "Shelf", "API development"]
  },
  {
    title: "Management",
    icon: Briefcase,
    skills: ["Team Leadership", "Resource Planning", "Reporting & Documentation", "Delivery Management", "Hiring", "Crisis Management"]
  },
  {
    title: "Business",
    icon: Briefcase,
    skills: ["Presale", "Upselling", "Risk Management", "Stakeholder Management"]
  },
  {
    title: "AI & Innovation",
    icon: Cpu,
    skills: ["Local LLMs", "AI Agents", "On-device ML", "ComfyUI", "n8n", "OpenAI GPT", "Claude", "Gemini", "Cloud LLM APIs", "RAG", "Prompt Engineering"]
  },
  {
    title: "Frontend & Web",
    icon: Code,
    skills: ["Vue.js", "TypeScript", "JavaScript"]
  },
  {
    title: "DevOps & Infra",
    icon: Terminal,
    skills: ["Firebase", "CI/CD", "Docker", "Cloud Architecture"]
  }
];

// Mapping to Devicon classes
const getDeviconClass = (skill: string): string | null => {
  const s = skill.toLowerCase();
  
  if (s.includes('flutter')) return 'devicon-flutter-plain colored';
  if (s.includes('dart')) return 'devicon-dart-plain colored';
  if (s.includes('android')) return 'devicon-android-plain colored';
  if (s.includes('ios')) return 'devicon-apple-original text-white'; // Apple is usually white in dark mode or black
  if (s.includes('vue')) return 'devicon-vuejs-plain colored';
  if (s.includes('typescript')) return 'devicon-typescript-plain colored';
  if (s.includes('javascript')) return 'devicon-javascript-plain colored';
  if (s.includes('firebase')) return 'devicon-firebase-plain colored';
  if (s.includes('docker')) return 'devicon-docker-plain colored';
  if (s.includes('kotlin')) return 'devicon-kotlin-plain colored';
  if (s.includes('swift')) return 'devicon-swift-plain colored';
  if (s.includes('linux')) return 'devicon-linux-plain text-white';
  
  return null;
};

// Fallback icon for skills without a specific devicon
const DefaultIcon = () => <Terminal className="w-4 h-4 text-m3-sys-outline" />;

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
             <h2 className="text-3xl font-bold font-heading text-m3-sys-onPrimaryContainer mb-6 pl-2">Навыки (Skills)</h2>
        </Reveal>

        <div className="bg-m3-sys-surfaceContainerLow/60 rounded-[2.5rem] p-6 md:p-8 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {skillCategories.map((cat, index) => (
                    <Reveal key={index} delay={index * 50}>
                        <div>
                            <div className="flex items-center gap-3 mb-4 text-m3-sys-primary">
                                <cat.icon size={20} />
                                <h3 className="font-bold text-m3-sys-onSurface text-lg">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, idx) => {
                                    const iconClass = getDeviconClass(skill);

                                    return (
                                        <span key={idx} className="pl-3 pr-4 py-2 bg-m3-sys-surfaceContainerHigh text-m3-sys-onSurfaceVariant font-medium text-xs md:text-sm rounded-xl border border-white/5 hover:border-m3-sys-primary/30 hover:text-m3-sys-primary transition-colors cursor-default flex items-center gap-2.5">
                                            {iconClass ? (
                                                <i className={`${iconClass} text-lg`}></i>
                                            ) : (
                                                <span className="opacity-70"><DefaultIcon /></span>
                                            )}
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
