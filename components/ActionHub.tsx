
import React, { useState } from 'react';
import { TabType, QuoteRequest } from '../types';
import { geminiService } from '../services/geminiService';

const ActionHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('tracking');
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  // AI Quote State
  const [quoteData, setQuoteData] = useState<QuoteRequest>({ origin: '', destination: '', cargoType: '', weight: '' });
  const [quoteResult, setQuoteResult] = useState<any>(null);
  const [isQuoting, setIsQuoting] = useState(false);

  // Assistant State
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  const handleSearch = () => {
    if (!trackingId) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      alert(`Rastreo para ${trackingId}: En tránsito hacia Ciudad de Guatemala.`);
    }, 1500);
  };

  const handleGetQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoting(true);
    try {
      const res = await geminiService.getQuoteEstimate(quoteData);
      setQuoteResult(res);
    } catch (err) {
      alert("Error al obtener cotización");
    } finally {
      setIsQuoting(false);
    }
  };

  const handleAskAssistant = async () => {
    if (!question) return;
    setIsAsking(true);
    const res = await geminiService.askAssistant(question);
    setAnswer(res || '');
    setIsAsking(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2b8cee] to-transparent"></div>
        
        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          <button 
            onClick={() => setActiveTab('tracking')}
            className={`flex-1 py-5 px-4 text-center border-b-2 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${activeTab === 'tracking' ? 'border-[#2b8cee] text-[#2b8cee] bg-white' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <span className="material-symbols-outlined text-[20px]">radar</span>
            Rastreo Inteligente
          </button>
          <button 
            onClick={() => setActiveTab('quote')}
            className={`flex-1 py-5 px-4 text-center border-b-2 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${activeTab === 'quote' ? 'border-[#2b8cee] text-[#2b8cee] bg-white' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <span className="material-symbols-outlined text-[20px]">neurology</span>
            Cotización IA
          </button>
          <button 
            onClick={() => setActiveTab('assistant')}
            className={`flex-1 py-5 px-4 text-center border-b-2 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${activeTab === 'assistant' ? 'border-[#2b8cee] text-[#2b8cee] bg-white' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            Asistente Regional
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 min-h-[280px]">
          {activeTab === 'tracking' && (
            <div className="animate-in fade-in duration-300">
              <label className="block text-sm font-semibold text-slate-700 mb-3 ml-1">Número de guía, embarque o referencia</label>
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="relative flex-grow group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 group-focus-within:text-[#2b8cee] transition-colors">search</span>
                  </div>
                  <input 
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="w-full pl-12 pr-4 h-14 md:h-16 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-[#2b8cee] outline-none text-lg text-slate-900 placeholder:text-slate-400 transition-all shadow-sm focus:ring-4 focus:ring-blue-500/5" 
                    placeholder="Ej: C807-4492-XLA..." 
                    type="text"
                  />
                  <div className="hidden md:flex absolute inset-y-0 right-4 items-center">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-bold text-green-700 uppercase">Sistema Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="h-14 md:h-16 px-8 md:px-10 bg-[#2b8cee] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-lg whitespace-nowrap disabled:opacity-50"
                >
                  {isSearching ? 'Procesando...' : (
                    <>
                      <span>Rastrear Envío</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start text-sm text-slate-500">
                <span className="font-medium">Búsquedas recientes:</span>
                <button onClick={() => setTrackingId('#882910')} className="px-3 py-1 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">#882910</button>
                <button onClick={() => setTrackingId('#IMPORT-22')} className="px-3 py-1 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">#IMPORT-22</button>
              </div>
            </div>
          )}

          {activeTab === 'quote' && (
            <div className="animate-in fade-in duration-300">
              <p className="text-slate-500 text-sm mb-6">Cotización inteligente basada en rutas optimizadas de C807 Express.</p>
              <form onSubmit={handleGetQuote} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  placeholder="Origen (Ej: Miami, FL)" 
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#2b8cee]"
                  onChange={e => setQuoteData({...quoteData, origin: e.target.value})}
                />
                <input 
                  required
                  placeholder="Destino (Ej: San Salvador)" 
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#2b8cee]"
                  onChange={e => setQuoteData({...quoteData, destination: e.target.value})}
                />
                <input 
                  required
                  placeholder="Tipo de Carga" 
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#2b8cee]"
                  onChange={e => setQuoteData({...quoteData, cargoType: e.target.value})}
                />
                <input 
                  required
                  placeholder="Peso Est. (Kg/Lb)" 
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#2b8cee]"
                  onChange={e => setQuoteData({...quoteData, weight: e.target.value})}
                />
                <button 
                  type="submit"
                  disabled={isQuoting}
                  className="md:col-span-2 bg-[#2b8cee] text-white p-4 rounded-xl font-bold shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50"
                >
                  {isQuoting ? 'Analizando con IA...' : 'Obtener Estimación con IA'}
                </button>
              </form>
              {quoteResult && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">Estimación Generada:</h4>
                  <p className="text-sm text-blue-800"><strong>Tiempo:</strong> {quoteResult.transitTime}</p>
                  <p className="text-sm text-blue-800"><strong>Costo Aprox:</strong> {quoteResult.estimatedCost}</p>
                  <p className="text-sm text-blue-800 italic mt-2">"{quoteResult.recommendation}"</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'assistant' && (
            <div className="animate-in fade-in duration-300 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700">
                  ¡Hola! Soy tu asistente de C807. ¿En qué puedo ayudarte hoy con tu logística regional?
                </div>
              </div>
              {answer && (
                <div className="flex gap-3 justify-end">
                   <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%]">
                    {answer}
                  </div>
                </div>
              )}
              <div className="mt-8 flex gap-2">
                <input 
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAskAssistant()}
                  placeholder="Pregúntame sobre aduanas, rutas o servicios..." 
                  className="flex-grow p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-[#2b8cee] shadow-inner"
                />
                <button 
                  onClick={handleAskAssistant}
                  disabled={isAsking}
                  className="w-14 h-14 bg-[#2b8cee] text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all disabled:opacity-50"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionHub;
