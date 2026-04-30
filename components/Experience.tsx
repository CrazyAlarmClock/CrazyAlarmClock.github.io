import React from 'react';
import { Reveal } from './ui/Reveal';
import { ExperienceItem } from '../types';
import { Briefcase, LayoutTemplate, Smartphone, ShieldCheck, Layers, Database } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    company: "inrgy",
    role: "Team Lead / Head of Development (Mobile, Web & AI)",
    period: "Июль 2023 — Настоящее время",
    description: "Управление разработкой мультипродуктовой экосистемы. Руководство несколькими командами, контроль ресурсов, пресейл и Delivery Management.",
    subsections: [
      {
        title: "Управление и Процессы",
        items: [
          "Resource Management: Планирование ресурсов и загрузки сотрудников (Capacity Planning). Контроль сроков и трекинг задач.",
          "Documentation: Внедрение стандартов ведения технической документации и отчетности. Поддержка актуальности базы знаний проекта.",
          "Delivery: Организация демо, сдача работ заказчикам, защита функционала."
        ]
      }
    ],
    projects: [
        { 
          name: "Enterprise-платформа / импортозамещение", 
          role: "", 
          description: "Роль: Frontend Team Lead (Vue.js). Руководил командой разработки единой точки управления виртуальной инфраструктурой." 
        },
        { 
          name: "Финтех / crypto banking", 
          role: "", 
          description: "Роль: Tech Lead / Product Manager. Бизнес: Защитил стратегию перехода на Flutter (экономия бюджета), регулярно продавал и сдавал заказчику новые фичи. Разработка: Hands-on coding (архитектура на Flutter), код-ревью." 
        },
        { 
          name: "IoT-платформа для зарядной инфраструктуры", 
          role: "", 
          description: "Роль: Team Lead Mobile & Web. Техника: Выстроил процессы с нуля. Лидировал создание личных кабинетов и приложения (лидер рынка РФ). Реализовал архитектуру IoT (Bluetooth)." 
        },
        { 
          name: "Социальный мобильный продукт", 
          role: "", 
          description: "Роль: Presale / Tech Lead (Native Mobile). Кризис-менеджмент: Принял проект в критическом состоянии (замена команды), восстановил темп, распределил ресурсы и довел до релиза." 
        },
        {
          name: "R&D / AI-автоматизация",
          role: "",
          description: "Внедрение AI-агентов для автоматизации отчетности в закрытом контуре."
        }
    ]
  },
  {
    company: "БПЦ Банковские Технологии",
    role: "Senior Flutter Developer",
    period: "Окт 2020 — Июль 2023",
    description: "Разработка сложных финтех-решений для банковского сектора.",
    achievements: [
      "Спроектировал и реализовал движок Server Driven UI на стороне фронтенда.",
      "Реализовал технологию SoftPOS (Tap to Phone) — прием бесконтактных платежей смартфоном.",
      "Разрабатывал архитектуру защищенных мобильных банков и супераппов (Smart City)."
    ]
  },
  {
    company: "CleanER Developing (Startup)",
    role: "CTO / Lead Mobile Developer",
    period: "Нояб 2019 — Окт 2020",
    description: "Full-stack разработка HR-Tech стартапа с нуля.",
    achievements: [
      "Полный цикл: Проектирование -> Дизайн -> БД -> Код -> Релиз.",
      "Реализовал Backend на Dart/Node.js, систему матчинга и real-time чат."
    ]
  }
];

// Helper to get specific icon for achievement text
const getAchievementIcon = (text: string) => {
  if (text.includes("Server Driven UI")) return <LayoutTemplate size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
  if (text.includes("SoftPOS") || text.includes("платежей")) return <Smartphone size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
  if (text.includes("защищенных") || text.includes("Smart City")) return <ShieldCheck size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
  if (text.includes("Full cycle")) return <Layers size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
  if (text.includes("Backend")) return <Database size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
  return <Briefcase size={16} className="text-m3-sys-primary mt-0.5 flex-shrink-0" />;
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
             <h2 className="text-3xl font-bold font-heading text-m3-sys-onPrimaryContainer mb-8 pl-2">Опыт работы</h2>
        </Reveal>

        <div className="relative pl-4 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-4 top-4 bottom-4 w-px bg-m3-sys-outlineVariant/30 md:left-[140px]" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <Reveal key={index} width="100%">
                  <div className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8">
                    
                    {/* Date Column */}
                    <div className="pl-12 md:pl-0 md:text-right md:pr-8 pt-1">
                       <span className="text-sm font-bold text-m3-sys-primary font-mono tracking-wide bg-m3-sys-surfaceContainerLow/50 md:bg-transparent px-3 py-1 md:p-0 rounded-full inline-block">
                         {exp.period}
                       </span>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-[140px] md:-ml-[5px] top-2 w-[10px] h-[10px] rounded-full bg-m3-sys-primary shadow-[0_0_10px_rgba(208,188,255,0.5)] z-10"></div>

                    {/* Content Column */}
                    <div className="pl-12 md:pl-0">
                       <h3 className="text-2xl font-bold text-m3-sys-onSurface mb-1">{exp.company}</h3>
                       <div className="text-lg text-m3-sys-secondary font-medium mb-4">{exp.role}</div>
                       <p className="text-m3-sys-onSurfaceVariant text-base leading-relaxed mb-6">
                         {exp.description}
                       </p>

                       {/* Subsections */}
                       {exp.subsections?.map((sub, idx) => (
                         <div key={idx} className="mb-6">
                           <h4 className="text-xs font-bold uppercase tracking-wider text-m3-sys-outline mb-2">{sub.title}</h4>
                           <ul className="space-y-1">
                              {sub.items.map((item, i) => (
                                <li key={i} className="text-sm text-m3-sys-onSurfaceVariant/80 flex items-start gap-2">
                                  <span className="mt-1.5 w-1 h-1 bg-m3-sys-outline rounded-full flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                           </ul>
                         </div>
                       ))}

                       {/* Projects Grid */}
                       {exp.projects && (
                         <div className="grid grid-cols-1 gap-3 mb-4">
                           {exp.projects.map((proj, idx) => (
                             <div key={idx} className="bg-m3-sys-surfaceContainerLow p-4 rounded-xl border border-white/5 hover:bg-m3-sys-surfaceContainer transition-colors group/card">
                               <div className="flex items-center justify-between mb-2">
                                  <span className="font-bold text-m3-sys-onSurface text-base">{proj.name}</span>
                               </div>
                               <p className="text-sm text-m3-sys-outline">{proj.description}</p>
                             </div>
                           ))}
                         </div>
                       )}

                       {/* Achievements */}
                       {exp.achievements && (
                         <ul className="space-y-2 mt-4">
                            {exp.achievements.map((ach, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-m3-sys-onSurfaceVariant">
                                {getAchievementIcon(ach)}
                                <span>{ach}</span>
                              </li>
                            ))}
                         </ul>
                       )}
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
