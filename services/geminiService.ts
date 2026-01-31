
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest } from "../types";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY || '' });
  }

  async getQuoteEstimate(data: QuoteRequest) {
    const prompt = `Actua como un experto en logística de Centroamérica para C807 Express.
    Calcula una estimación (no vinculante) para el siguiente envío:
    Origen: ${data.origin}
    Destino: ${data.destination}
    Carga: ${data.cargoType}
    Peso: ${data.weight}
    
    Proporciona un desglose breve que incluya:
    1. Tiempo estimado de tránsito.
    2. Costo aproximado en USD.
    3. Recomendación logística principal.
    
    Responde en formato JSON amigable.`;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              transitTime: { type: Type.STRING },
              estimatedCost: { type: Type.STRING },
              recommendation: { type: Type.STRING },
            },
            required: ["transitTime", "estimatedCost", "recommendation"]
          }
        }
      });
      return JSON.parse(response.text || '{}');
    } catch (error) {
      console.error("Gemini Quote Error:", error);
      throw error;
    }
  }

  async askAssistant(question: string) {
    const prompt = `Eres el Asistente Regional de C807 Express. Ayudas a clientes con dudas sobre logística en Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y Panamá. 
    Pregunta del usuario: ${question}`;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "Se profesional, eficiente y enfocado en la logística centroamericana.",
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Assistant Error:", error);
      return "Lo siento, hubo un problema al procesar tu consulta. Por favor intenta de nuevo.";
    }
  }
}

export const geminiService = new GeminiService();
