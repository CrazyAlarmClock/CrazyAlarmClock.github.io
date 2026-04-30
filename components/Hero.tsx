import React from 'react';
import { MapPin, Phone, Mail, Download, ArrowRight, User, Send } from 'lucide-react';
import { Reveal } from './ui/Reveal';
const avatarImg = new URL('../assets/avatar.jpg', import.meta.url).href;
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-center pt-24 pb-16 relative">
      <div className="container mx-auto px-4 max-w-4xl z-10">
        
        {/* Main Content Card */}
        <Reveal>
            <div className="bg-m3-sys-surfaceContainerLow/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative overflow-hidden">
                
                {/* Decorative Gradient inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-m3-sys-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                {/* Avatar */}
                <div className="flex-shrink-0 relative">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] overflow-hidden bg-m3-sys-surfaceContainerHighest shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center group relative">
                        {/* Fallback Icon - Visible if image missing */}
                        <User size={80} className="text-m3-sys-onSurfaceVariant/40 absolute" />
                        <img 
                          src={avatarImg} 
                          alt="Pavel Malyshev" 
                          className="w-full h-full object-cover relative z-10 transition-opacity duration-300"
                          style={{ objectPosition: "center top" }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.opacity = '0';
                          }}
                        />
                    </div>
                </div>

                {/* Text Info */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-m3-sys-onPrimaryContainer tracking-tight leading-tight">
                            Павел Малышев
                        </h1>
                        <h2 className="text-xl md:text-2xl text-m3-sys-secondary font-medium mt-2">
                             Team Lead / Engineering Manager <br /> <span className="text-m3-sys-primary">(Mobile, Web & AI Solutions)</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-m3-sys-outline">
                         <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-lg">
                            <MapPin size={14} /> Москва, Россия
                         </div>
                         <a href="tel:+79267105770" className="flex items-center gap-1.5 hover:text-m3-sys-primary transition-colors bg-black/20 px-3 py-1 rounded-lg">
                            <Phone size={14} /> +7 926 710-57-70
                         </a>
                         <a href="mailto:CrazyAlarmClock@gmail.com" className="flex items-center gap-1.5 hover:text-m3-sys-primary transition-colors bg-black/20 px-3 py-1 rounded-lg">
                            <Mail size={14} /> CrazyAlarmClock@gmail.com
                         </a>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                        <a href="https://t.me/CrazyAlarmClock" target="_blank" rel="noopener noreferrer" className="bg-m3-sys-primary text-m3-sys-onPrimary hover:bg-white transition-colors h-12 px-6 rounded-full flex items-center justify-center gap-2 font-medium text-base">
                            Связаться <Send size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};