
import React from 'react';
import ActionHub from './ActionHub';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2b8cee] text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Sistema Unificado v4.0
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Logística Unificada para <span className="text-[#2b8cee]">Centroamérica</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Gestión inteligente, cotizaciones con IA y rastreo en tiempo real desde un único centro de comando.
          </p>
        </div>

        <ActionHub />
      </div>
    </div>
  );
};

export default Hero;
