
import React from 'react';
import { BookOpen, Users, HelpCircle, Info, CheckCircle2 } from 'lucide-react';

const ProjectInfo: React.FC = () => {
  const developers = [
    "Aya Taftaf", "Hajar Bouih ", "Soukaina Elbaz", "Aya Boulifa",
    "Flahi fatima-ez-zahraa", "Flahi Sara", "Fatima Lachal", "Aymane Bari"
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="cyber-card p-8 rounded-2xl border-green-500/30 bg-gradient-to-r from-green-950/20 to-transparent">
        <h2 className="mono text-3xl font-bold text-green-400 mb-4 flex items-center gap-3">
          <Info className="text-green-500" size={32} />
          PROJET : IIOT_SENTINEL_IDS
        </h2>
        <p className="mono text-sm text-green-600 leading-relaxed max-w-3xl">
          L’Internet Industriel des Objets (IIoT) est le pilier de l'Industrie 4.0. Cependant, la convergence entre IT et OT expose les systèmes critiques (PLC, SCADA) à des attaques dévastatrices. Ce projet implémente un système de détection d'intrusion spécialisé dans la lutte contre les attaques par déni de service (DoS).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Explanation Section */}
        <div className="cyber-card p-6 rounded-xl space-y-4">
          <h3 className="mono text-lg font-bold text-green-500 flex items-center gap-2 border-b border-green-900/50 pb-2">
            <BookOpen size={20} /> CONTEXTE TECHNIQUE
          </h3>
          <div className="space-y-3 mono text-xs text-green-700">
            <p><span className="text-green-500 font-bold underline">Objectif :</span> Analyser les datasets réels pour identifier les signatures de flooding (SYN, UDP, ICMP) et protéger les automates industriels.</p>
            <p><span className="text-green-500 font-bold underline">Méthodologie :</span> Utilisation de modèles de Machine Learning pour la classification du trafic et intégration de l'IA Générative (Gemini) pour le diagnostic médico-légal (forensics).</p>
            <div className="p-3 bg-black/40 rounded border border-green-900/30">
              <p className="text-green-500 mb-1">Protocoles Supportés :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Modbus/TCP (Port 502)</li>
                <li>MQTT (Broker IoT)</li>
                <li>S7Comm (Siemens Step7)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Section */}
        <div className="cyber-card p-6 rounded-xl space-y-4">
          <h3 className="mono text-lg font-bold text-green-500 flex items-center gap-2 border-b border-green-900/50 pb-2">
            <HelpCircle size={20} /> GUIDE D'UTILISATION
          </h3>
          <div className="space-y-4">
            {[
              { t: "Surveillance", d: "Utilisez le 'Dashboard' pour monitorer les pics de PPS (Packets Per Second) en temps réel." },
              { t: "Analyse IA", d: "Copiez vos logs suspects dans 'AI Forensics' pour obtenir un rapport de remédiation complet." },
              { t: "Simulation", d: "Observez la 'Network Map' pour visualiser comment les paquets convergent vers la cible." },
              { t: "Terminal", d: "Interagissez avec le noyau IDS via la CLI pour lancer des scans réseau manuels." }
            ].map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-500 mono text-[10px] font-bold border border-green-500/30">
                  0{i+1}
                </div>
                <div>
                  <p className="mono text-xs font-bold text-green-400">{step.t}</p>
                  <p className="mono text-[10px] text-green-800 leading-tight">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developers Section */}
      <div className="cyber-card p-6 rounded-xl">
        <h3 className="mono text-lg font-bold text-green-500 flex items-center gap-2 border-b border-green-900/50 pb-4 mb-6">
          <Users size={20} /> CORE DEVELOPMENT TEAM (8)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {developers.map((name, i) => (
            <div key={i} className="group relative overflow-hidden p-4 bg-green-500/5 border border-green-900/30 rounded-lg hover:border-green-500/60 transition-all text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <p className="mono text-[10px] text-green-900 mb-1">DEV_ID_00{i+1}</p>
              <p className="mono text-sm font-bold text-green-500 uppercase tracking-tighter">{name}</p>
              <div className="mt-2 flex justify-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={10} className="text-green-500" />
                <div className="w-8 h-[1px] bg-green-900 self-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center pb-8">
        <p className="mono text-[10px] text-green-900 animate-pulse uppercase tracking-[0.3em]">
          Secure Transmission // Project Final Version 2.0.4
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
