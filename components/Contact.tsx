import React from 'react';
import { Reveal } from './ui/Reveal';
import { Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-8 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal width="100%">
            <div className="bg-gradient-to-br from-m3-sys-primaryContainer to-m3-sys-surfaceContainerLow rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-m3-sys-primary/20 rounded-full blur-2xl"></div>

                <h2 className="text-3xl md:text-5xl font-bold font-heading text-m3-sys-onPrimaryContainer mb-4 relative z-10">
                    Открыт к предложениям
                </h2>
                <p className="text-m3-sys-onSurfaceVariant text-base md:text-lg mb-10 max-w-xl mx-auto relative z-10">
                    Жду предложений о сотрудничестве.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                    <a href="https://t.me/CrazyAlarmClock" target="_blank" rel="noopener noreferrer" className="bg-m3-sys-primary text-m3-sys-onPrimary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-m3-sys-primary/20">
                        <Send size={18} /> Telegram
                    </a>
                    <a href="mailto:CrazyAlarmClock@gmail.com" className="bg-m3-sys-surfaceContainerHigh text-m3-sys-onSurface px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors border border-white/5">
                        <Mail size={18} /> Email
                    </a>
                </div>
                
                <div className="mt-12 text-xs text-m3-sys-outline font-mono opacity-50">
                    © {new Date().getFullYear()} Pavel Malyshev
                </div>
            </div>
        </Reveal>
      </div>
    </footer>
  );
};
