import React, { useEffect, useState } from 'react';
import { ModalProps } from '../types';
import { X } from 'lucide-react';
import { TeamShield } from './TeamShield';

export const InfoModal: React.FC<ModalProps> = ({ isOpen, onClose, day }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'}`}
      role="dialog" 
      aria-modal="true"
    >
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-green-950/80"
        onClick={onClose}
      ></div>

      {/* Card Content */}
      <div 
        className={`relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? 'translate-y-0 scale-100 rotate-0' : 'translate-y-10 scale-90 rotate-3'}`}
      >
        {day && (
          <>
            {/* Artistic Header Background with Blurred Logo */}
            <div className="relative h-32 bg-slate-100 overflow-hidden flex items-center justify-center">
               {/* Abstract background blobs */}
               <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70" style={{backgroundColor: day.colors[0]}}></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70" style={{backgroundColor: day.colors[1] || day.colors[0]}}></div>
               </div>
               
               {/* Giant Blurred Logo as watermark */}
               {day.logoUrl && (
                 <img 
                   src={day.logoUrl} 
                   className="absolute w-64 h-64 object-contain opacity-10 blur-sm pointer-events-none" 
                   alt=""
                 />
               )}

               {/* Actual Logo */}
               <div className="relative z-10 transform translate-y-4">
                  <TeamShield colors={day.colors} logoUrl={day.logoUrl} className="w-28 h-28 drop-shadow-2xl" />
               </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Body */}
            <div className="px-8 pb-10 pt-12 text-center relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
                Dia {day.id}
              </span>

              <h2 className="mb-6 text-3xl font-black text-slate-900 font-serif leading-none tracking-tight">
                {day.title}
              </h2>

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-amber-500/20 font-serif">"</span>
                <p className="text-lg leading-relaxed text-slate-600 font-medium relative z-10">
                  {day.content}
                </p>
                <span className="absolute -bottom-8 -right-2 text-6xl text-amber-500/20 font-serif rotate-180">"</span>
              </div>

              <button
                type="button"
                className="mt-10 w-full rounded-2xl bg-gradient-to-r from-red-700 to-red-600 px-5 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                onClick={onClose}
              >
                Continuar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};