
import React from 'react';

const MapSection: React.FC = () => {
  const stats = [
    { value: '99.8%', label: 'Entregas a Tiempo' },
    { value: '24/7', label: 'Monitoreo Satelital' },
    { value: '+500', label: 'Unidades Activas' },
    { value: '45min', label: 'Respuesta Promedio' },
  ];

  return (
    <section className="relative bg-[#101922] min-h-[600px] flex flex-col overflow-hidden border-t border-slate-800">
      {/* Map Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          alt="Map" 
          className="w-full h-full object-cover mix-blend-luminosity grayscale"
          src="https://picsum.photos/id/124/1600/900" 
        />
        <div className="absolute inset-0 bg-[#101922]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-transparent to-[#101922]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="md:w-1/3 text-white space-y-6">
          <div className="inline-block p-3 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[#2b8cee] text-4xl">public</span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight">Conectividad Regional Total</h3>
          <p className="text-slate-400 leading-relaxed">
            Nuestra red integrada cubre desde Guatemala hasta Panamá, con puntos de conexión estratégicos que garantizan velocidad y seguridad en cada milla.
          </p>
          <a className="inline-flex items-center gap-2 text-[#2b8cee] font-bold hover:text-white transition-colors" href="#">
            Ver mapa de cobertura
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
        </div>

        {/* Interactive Points Visual */}
        <div className="md:w-2/3 h-80 md:h-[450px] w-full relative">
          {/* Guatemala Hub */}
          <div className="absolute top-[20%] left-[20%]">
            <div className="w-4 h-4 bg-[#2b8cee] rounded-full shadow-[0_0_20px_3px_#2b8cee] animate-pulse"></div>
          </div>
          {/* Panama HQ */}
          <div className="absolute top-[75%] left-[75%]">
            <div className="w-5 h-5 bg-[#2b8cee] rounded-full shadow-[0_0_20px_5px_#2b8cee] animate-pulse"></div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2b8cee] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
              Panamá HQ
            </div>
          </div>
          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <path 
              d="M150,100 Q300,200 600,340" 
              fill="none" 
              stroke="#2b8cee" 
              strokeWidth="2" 
              strokeDasharray="8 8" 
              className="animate-[dash_20s_linear_infinite]"
            />
          </svg>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-20 w-full border-t border-slate-800 bg-[#101922]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="py-8 px-4 text-center group transition-colors hover:bg-white/5">
              <p className="text-3xl md:text-4xl font-black text-white group-hover:text-[#2b8cee] transition-colors">{stat.value}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -500; }
        }
      `}</style>
    </section>
  );
};

export default MapSection;
