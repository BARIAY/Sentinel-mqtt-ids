
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const analyzeAttackLog = async (logData: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a high-level IIoT security expert. Analyze this network log snippet for an intrusion detection system (IDS) and provide a forensic report. 
    Focus on industrial protocols like Modbus, MQTT, or S7Comm if relevant.
    
    Log Data:
    ${logData}
    
    Identify the attack vector, severity, and recommend specific industrial mitigation steps (e.g., PLC hardening, network segmentation).`,
    config: {
      temperature: 0.7,
      topP: 0.9,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          vectors: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          remediation: { type: Type.STRING }
        },
        required: ["summary", "vectors", "remediation"]
      }
    }
  });

  return JSON.parse(response.text);
};
