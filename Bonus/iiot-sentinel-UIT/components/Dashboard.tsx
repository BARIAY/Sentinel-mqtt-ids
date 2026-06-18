
import React, { useMemo, useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldAlert, Zap, Server, Globe, Cpu } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isCritical, setIsCritical] = useState(false);
  const [rawLogs, setRawLogs] = useState<string[]>([]);
  
  const [trafficData, setTrafficData] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      time: i,
      pps: Math.floor(Math.random() * 200) + 50,
      bandwidth: Math.floor(Math.random() * 20) + 5
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(prev => {
        const last = prev[prev.length - 1];
        const chance = Math.random();
        const isSpike = chance > 0.85 || (last.pps > 800 && chance > 0.4);
        const nextPps = isSpike 
          ? Math.min(2500, last.pps + Math.floor(Math.random() * 500))
          : Math.max(50, last.pps - Math.floor(Math.random() * 200) + Math.floor(Math.random() * 100));
        
        setIsCritical(nextPps > 1000);
        
        // Simuler des logs de données brutes analysées
        const protocols = ["MODBUS", "MQTT", "S7COMM", "HTTP"];
        const proto = protocols[Math.floor(Math.random() * protocols.length)];
        const newLog = `[${new Date().toLocaleTimeString()}] ${proto} | SRC: 192.168.1.${Math.floor(Math.random()*255)} | LEN: ${Math.floor(Math.random()*1500)} | ${isSpike ? 'ANOMALY_DETECTED' : 'OK'}`;
        setRawLogs(prevLogs => [newLog, ...prevLogs.slice(0, 15)]);

        return [...prev.slice(1), { 
          time: last.time + 1, 
          pps: nextPps,
          bandwidth: Math.floor(nextPps / 10) 
        }];
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'PACKETS / SEC', value: trafficData[29].pps.toLocaleString(), icon: Zap, color: isCritical ? 'text-red-500' : 'text-green-500' },
    { label: 'INBOUND TRAFFIC', value: `${trafficData[29].bandwidth} Mbps`, icon: Activity, color: 'text-blue-500' },
    { label: 'CPU LOAD (PLC)', value: isCritical ? '94%' : '18%', icon: Cpu, color: isCritical ? 'text-red-600' : 'text-green-800' },
    { label: 'ACTIVE THREATS', value: isCritical ? 'DETECTED' : 'NONE', icon: ShieldAlert, color: isCritical ? 'text-red-500' : 'text-green-900' },
  ];

  return (
    <div className={`space-y-6 transition-colors duration-500 ${isCritical ? 'bg-red-950/5' : ''}`}>
      {isCritical && (
        <div className="bg-red-600/20 border border-red-600 p-3 rounded flex items-center gap-3 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.2)]">
          <ShieldAlert className="text-red-500" />
          <span className="mono text-red-500 font-bold text-sm tracking-tighter uppercase">
            Emergency Alert: High-Frequency Packet Flood on Node IIOT-01
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className={`cyber-card p-4 rounded-xl flex items-center justify-between border-l-4 ${isCritical && (i === 0 || i === 3) ? 'border-l-red-600' : 'border-l-green-500'}`}>
            <div>
              <p className="mono text-[10px] text-green-800 font-bold uppercase tracking-widest">{stat.label}</p>
              <h3 className={`text-xl font-bold mono mt-1 ${stat.color}`}>{stat.value}</h3>
            </div>
            <stat.icon size={32} className={`${stat.color} opacity-40`} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="cyber-card p-6 rounded-xl">
            <h2 className="mono text-sm font-bold text-green-500 uppercase flex items-center gap-2 mb-6">
              <Activity size={16} /> Real-Time Traffic Analysis (PPS)
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="floodGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={isCritical ? "#ff0000" : "#00ff41"} stopOpacity={0.4}/>
                      <stop offset="95%" stopColor={isCritical ? "#ff0000" : "#00ff41"} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#0a2a0a" vertical={false} />
                  <XAxis dataKey="time" hide />
                  <YAxis stroke="#004400" fontSize={10} domain={[0, 3000]} />
                  <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #00ff41', fontSize: '10px' }} />
                  <Area 
                    type="stepAfter" 
                    dataKey="pps" 
                    stroke={isCritical ? "#ff0000" : "#00ff41"} 
                    fill="url(#floodGradient)" 
                    strokeWidth={2}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="cyber-card p-4 rounded-xl">
            <h2 className="mono text-[10px] font-bold text-green-800 uppercase mb-3 tracking-widest">Live Analyzed Frame Stream</h2>
            <div className="h-40 overflow-hidden space-y-1 font-mono text-[10px]">
              {rawLogs.map((log, i) => (
                <div key={i} className={`flex gap-2 transition-opacity duration-300 ${i === 0 ? 'text-green-400 opacity-100' : 'text-green-900 opacity-60'}`}>
                  <span className="shrink-0">{'>'}</span>
                  <span className={log.includes('ANOMALY') ? 'text-red-500 font-bold' : ''}>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cyber-card p-6 rounded-xl h-fit">
          <h2 className="mono text-sm font-bold text-green-500 uppercase flex items-center gap-2 mb-6">
            <Server size={16} /> Asset Vulnerability
          </h2>
          <div className="space-y-6">
            <div className="text-center p-4 border border-green-900/30 rounded-lg bg-green-500/5">
                <p className="text-[10px] mono text-green-800 uppercase">Risk Level</p>
                <p className={`text-3xl font-bold mono ${isCritical ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
                    {isCritical ? 'CRITICAL' : 'SECURE'}
                </p>
            </div>
            
            <div className="space-y-4">
                <p className="text-[10px] mono text-green-700 uppercase border-b border-green-900/30 pb-1">Analyzed Protocols</p>
                <div className="grid grid-cols-2 gap-2">
                    {["Modbus/TCP", "MQTT", "S7Comm", "OPC-UA"].map(p => (
                        <div key={p} className="text-[10px] mono p-2 bg-black/40 border border-green-900/20 rounded text-green-500">
                            {p}: <span className="text-green-800">MONITORING</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
