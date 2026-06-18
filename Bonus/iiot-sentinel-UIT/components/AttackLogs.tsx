
import React from 'react';
import { ShieldAlert, Terminal, ArrowDownRight } from 'lucide-react';

const AttackLogs: React.FC = () => {
  const logs = [
    { id: '1', time: '14:22:01', src: '192.168.45.1', type: 'TCP SYN Flood', pps: '4,500', severity: 'CRITICAL' },
    { id: '2', time: '14:21:58', src: '192.168.45.12', type: 'UDP Amplification', pps: '2,100', severity: 'HIGH' },
    { id: '3', time: '14:21:45', src: '10.0.4.55', type: 'ICMP Flood', pps: '850', severity: 'MEDIUM' },
    { id: '4', time: '14:21:30', src: '172.16.1.4', type: 'TCP SYN Flood', pps: '3,800', severity: 'CRITICAL' },
    { id: '5', time: '14:21:12', src: 'Unknown (Botnet)', type: 'HTTP GET Flood', pps: '1,200', severity: 'HIGH' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="mono text-sm font-bold text-green-500 uppercase flex items-center gap-2">
          <Terminal size={16} /> Intrusion Events (DoS-Focus)
        </h2>
        <span className="text-[10px] mono text-red-500 bg-red-950/20 px-2 py-1 rounded border border-red-900/50">
          LOG_RETENTION: 24H
        </span>
      </div>

      <div className="grid gap-2">
        {logs.map((log) => (
          <div key={log.id} className="cyber-card p-4 rounded-lg flex items-center justify-between border-l-2 border-l-green-900 hover:border-l-red-500 transition-all group">
            <div className="flex items-center gap-6">
              <div className="text-xs mono">
                <p className="text-green-800 text-[10px]">TIMESTAMP</p>
                <p className="text-green-500">{log.time}</p>
              </div>
              <div className="text-xs mono">
                <p className="text-green-800 text-[10px]">SOURCE_IP</p>
                <p className="text-green-300">{log.src}</p>
              </div>
              <div className="text-xs mono">
                <p className="text-green-800 text-[10px]">VECTOR</p>
                <p className="text-red-400 font-bold">{log.type}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-right mono">
                <p className="text-green-800 text-[10px]">PKTS/SEC</p>
                <p className="text-red-500 font-bold">{log.pps}</p>
              </div>
              <div className={`px-3 py-1 rounded text-[10px] mono font-bold border ${
                log.severity === 'CRITICAL' ? 'bg-red-950/50 text-red-500 border-red-500' : 'bg-yellow-950/50 text-yellow-500 border-yellow-500'
              }`}>
                {log.severity}
              </div>
              <button className="text-green-900 group-hover:text-green-400 transition-colors">
                <ArrowDownRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded bg-black/50 border border-green-900/20 border-dashed">
        <p className="mono text-[10px] text-green-900 text-center uppercase">
          End of recent logs. Searching archives for pattern match...
        </p>
      </div>
    </div>
  );
};

export default AttackLogs;
