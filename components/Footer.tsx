
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e293b] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-[#1e293b] flex items-center justify-center rounded shadow-lg">
                <span className="material-symbols-outlined text-xl">local_shipping</span>
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight uppercase">C807 Express</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Líderes en soluciones logísticas integradas para Centroamérica. Tecnología avanzada y experiencia local al servicio de tu negocio.
            </p>
            <div className="flex gap-4">
              {['in', 'fb', 'x'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-[#2b8cee] hover:text-white transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Oficinas Regionales</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#2b8cee] text-[18px] mt-0.5">location_on</span>
                <span>
                  <strong className="text-white block">Guatemala (Central)</strong>
                  +502 2420-9000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-slate-500 text-[18px] mt-0.5">location_on</span>
                <span>
                  <strong className="text-white block">El Salvador</strong>
                  +503 2250-7000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-slate-500 text-[18px] mt-0.5">location_on</span>
                <span>
                  <strong className="text-white block">Honduras</strong>
                  +504 2564-0000
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Enlaces Rápidos</h5>
            <ul className="space-y-3 text-sm">
              {['Portal de Clientes', 'Rastreo Público', 'Solicitar Cotización', 'Trabaja con Nosotros'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#2b8cee] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h5 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Certificaciones</h5>
            <div className="flex flex-wrap gap-4">
              <div className="px-3 py-2 bg-slate-800 rounded border border-slate-700 group hover:border-[#2b8cee] transition-all cursor-default">
                <span className="block text-xs font-bold text-white">ISO 9001</span>
                <span className="text-[10px] text-slate-500">Certified Quality</span>
              </div>
              <div className="px-3 py-2 bg-slate-800 rounded border border-slate-700 group hover:border-[#2b8cee] transition-all cursor-default">
                <span className="block text-xs font-bold text-white">BASC</span>
                <span className="text-[10px] text-slate-500">Secure Commerce</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 C807 Express. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
