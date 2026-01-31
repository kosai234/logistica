
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#2b8cee] text-white flex items-center justify-center rounded-lg shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none uppercase">C807 Express</h1>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Logistics Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-600 hover:text-[#2b8cee] transition-colors" href="#soluciones">Soluciones</a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#2b8cee] transition-colors" href="#compania">Compañía</a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#2b8cee] transition-colors" href="#recursos">Recursos</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
              <span>Portal Clientes</span>
            </button>
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
