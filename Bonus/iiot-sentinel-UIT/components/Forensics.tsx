
import React, { useState } from 'react';
import { Search, ShieldAlert, Cpu, CheckCircle, Loader2 } from 'lucide-react';
import { analyzeAttackLog } from '../services/geminiService';
import { ForensicReport } from '../types';

const Forensics: React.FC = () => {
  const [logInput, setLogInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<ForensicReport | null>(null);

  const handleAnalyze = async () => {
    if (!logInput.trim()) return;
    setLoading(true);
    try {
      const result = await analyzeAttackLog(logInput);
      setReport(result);
    } catch (error) {
      console.error(error);
      alert("AI Analysis failed. Check API configuration.");
    } finally {
      setLoading(false);
    }
  };

  const sampleLogs = [
    "MQTT: Published to 'factory/sensor1' with payload: 0x999999999999... (Suspicious buffer length)",
    "MODBUS: Read multiple registers from Unit 1, Addr 0, Qty 100. Rate: 1000 requests/sec.",
    "S7COMM: User 'guest' attempted WRITE to DB10. Permission denied."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="cyber-card p-6 rounded-xl border-blue-500/30">
        <h2 className="mono text-lg font-bold text-blue-400 uppercase flex items-center gap-2 mb-4">
          <Search size={20} /> AI Attack Forensic Lab
        </h2>
        <p className="mono text-xs text-blue-800 mb-6 leading-relaxed">
          Paste raw industrial logs or network capture strings to run high-level forensic analysis using Gemini-3 AI.
        </p>
        
        <div className="space-y-4">
          <textarea
            className="w-full h-32 bg-black/50 border border-blue-900/50 rounded-lg p-4 mono text-xs text-blue-400 focus:outline-none focus:border-blue-500 caret-blue-500"
            placeholder="[2023-11-24T12:00:00] SRC: 10.0.0.5 DST: 10.0.0.10 PROTO: MQTT PAYLOAD: ..."
            value={logInput}
            onChange={(e) => setLogInput(e.target.value)}
          />
          
          <div className="flex gap-2">
            {sampleLogs.map((s, i) => (
              <button 
                key={i} 
                onClick={() => setLogInput(s)}
                className="text-[10px] mono px-3 py-1 bg-blue-900/20 text-blue-500 rounded border border-blue-500/20 hover:bg-blue-500/10"
              >
                Sample {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading || !logInput}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white mono font-bold text-sm rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Cpu size={18} />}
            {loading ? "PROCESSING NEURAL FORENSICS..." : "INITIALIZE AI FORENSIC ENGINE"}
          </button>
        </div>
      </div>

      {report && (
        <div className="animate-in slide-in-from-bottom-4 duration-500 cyber-card p-6 rounded-xl border-green-500/30">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="text-red-500" size={24} />
            <h3 className="mono text-xl font-bold text-green-400">ANALYSIS COMPLETE</h3>
          </div>
          
          <div className="space-y-6">
            <section>
              <h4 className="mono text-[10px] text-green-800 font-bold uppercase tracking-widest mb-2">SUMMARY</h4>
              <p className="text-sm text-green-500 leading-relaxed bg-green-500/5 p-3 rounded border border-green-900/30">
                {report.summary}
              </p>
            </section>

            <section>
              <h4 className="mono text-[10px] text-green-800 font-bold uppercase tracking-widest mb-2">VECTORS DETECTED</h4>
              <div className="flex flex-wrap gap-2">
                {report.vectors.map((v, i) => (
                  <span key={i} className="px-3 py-1 bg-red-900/20 text-red-500 text-xs mono rounded border border-red-500/30 flex items-center gap-2">
                    <ShieldAlert size={12} /> {v}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h4 className="mono text-[10px] text-green-800 font-bold uppercase tracking-widest mb-2">REMEDIATION STRATEGY</h4>
              <p className="text-sm text-green-400 leading-relaxed bg-green-500/10 p-4 rounded border border-green-500/20 flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                {report.remediation}
              </p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forensics;
