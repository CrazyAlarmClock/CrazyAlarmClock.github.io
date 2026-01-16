import React from 'react';
import { Reveal } from './ui/Reveal';
import { HackathonItem } from '../types';
import { Trophy, Medal, MapPin } from 'lucide-react';

const awards: HackathonItem[] = [
  { title: "Moscow Travel Hack", award: "1 место", track: "Готовые решения" },
  { title: "Цифровой прорыв атомных городов", award: "1 место", track: "Малое и среднее предпринимательство" },
  { title: "VTB MORE.tech 3.0", award: "2 место", track: "Финтех" },
  { title: "Urban.Tech Moscow", award: "2 место", track: "Сберклауд" },
  { title: "VirusHack от Ростелеком", award: "2 место", track: "Mail.ru" },
  { title: "SmartMail Hack 2", award: "2 место", track: "Дизайн и данные" },
  { title: "Sky.Tech", award: "Финалист", track: "Авиатех" },
  { title: "Neuro Dev Hack", award: "Участник", track: "Нейротехнологии" },
  { title: "AKADOTON", award: "Участник", track: "Хакатон от Акадо" },
];

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
             <h2 className="text-3xl font-bold font-heading text-m3-sys-onPrimaryContainer mb-6 pl-2">Хакатоны и Достижения</h2>
        </Reveal>

        <div className="bg-m3-sys-surfaceContainerLow/60 rounded-[2rem] p-2 border border-white/5">
            {awards.map((item, index) => {
                const isGold = item.award.includes('1');
                const isSilver = item.award.includes('2');
                const iconColor = isGold ? 'text-yellow-400' : isSilver ? 'text-gray-300' : 'text-m3-sys-primary';
                
                return (
                    <Reveal key={index} delay={index * 50} width="100%">
                        <div className="group flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors border-b border-white/5 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                                    {isGold ? <Trophy size={20} /> : <Medal size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-m3-sys-onSurface text-base">{item.title}</h4>
                                    <div className="text-xs text-m3-sys-outline font-mono mt-0.5">{item.track}</div>
                                </div>
                            </div>
                            <div className={`font-bold text-sm text-right px-3 py-1 rounded-lg bg-black/20 ${iconColor}`}>
                                {item.award}
                            </div>
                        </div>
                    </Reveal>
                );
            })}
        </div>
      </div>
    </section>
  );
};