import React from 'react';
import { Reveal } from './ui/Reveal';
import { Code2, Users, TrendingUp, Bot } from 'lucide-react';
import { FocusArea } from '../types';

const focusAreas: FocusArea[] = [
  {
    title: "Hands-on Development",
    description: "Активно вовлечён в разработку как тимлид: формирую архитектуру, задаю техническое направление и провожу код-ревью. Беру на себя реализацию наиболее критичных и сложных частей системы.",
    icon: Code2
  },
  {
    title: "Управление и Архитектура",
    description: "Проработка архитектуры сервисов и UserFlow. Построение процессов разработки, найм, менторство. Полная ответственность за сдачу проектов: защита результатов перед стейкхолдерами и проведение демо.",
    icon: Users
  },
  {
    title: "Бизнес и Продажи",
    description: "Оцениваю риски, составляю сметы (КП), продаю новые фичи (Upselling), обосновываю технические решения бизнесу.",
    icon: TrendingUp
  },
  {
    title: "R&D и AI",
    description: "Внедряю локальные LLM и AI-агентов в корпоративные контуры и мобильные приложения.",
    icon: Bot
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
             <h2 className="text-3xl font-bold font-heading text-m3-sys-onPrimaryContainer mb-6 pl-2">Обо мне</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
            {/* Main Bio */}
            <Reveal width="100%">
                <div className="bg-m3-sys-surfaceContainer/50 p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                    <p className="text-lg text-m3-sys-onSurface leading-relaxed relative z-10">
                        Team Lead с 6+ летним опытом, специализирующийся на экосистеме <span className="text-m3-sys-primary font-bold">Flutter/Dart</span>. 
                        Моя супер-сила — <span className="underline decoration-m3-sys-tertiary decoration-2 underline-offset-4">Full Cycle</span> реализация проектов на едином стеке (Mobile, Web, Backend на Dart). 
                        Сочетаю глубокую техническую экспертизу (Hands-on) с навыками управления ресурсами команды и delivery.
                    </p>
                </div>
            </Reveal>

            {/* Focus Areas - Full Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {focusAreas.map((area, index) => (
                    <Reveal key={index} delay={index * 50} width="100%">
                        <div className="bg-m3-sys-surfaceContainerLow hover:bg-m3-sys-surfaceContainerHigh transition-colors p-6 rounded-[1.5rem] h-full flex flex-col border border-white/5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-m3-sys-secondaryContainer text-m3-sys-onSecondaryContainer w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <area.icon size={20} />
                                </div>
                                <h3 className="font-bold text-m3-sys-onSurface text-base leading-tight">{area.title}</h3>
                            </div>
                            <p className="text-sm text-m3-sys-outline leading-relaxed">{area.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};