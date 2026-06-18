
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Forensics from './components/Forensics';
import SystemTerminal from './components/SystemTerminal';
import AttackLogs from './components/AttackLogs';
import NetworkMap from './components/NetworkMap';
import ProjectInfo from './components/ProjectInfo';
import { Shield, Bell, Settings, Power } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'forensics': return <Forensics />;
      case 'terminal': return <div className="h-[calc(100vh-160px)]"><SystemTerminal /></div>;
      case 'logs': return <AttackLogs />;
      case 'network': return <div className="h-[calc(100vh-180px)]"><NetworkMap /></div>;
      case 'about': return <ProjectInfo />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#050505] text-[#00ff41] overflow-hidden selection:bg-green-500 selection:text-black">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative">
        {/* Header bar */}
        <header className="h-16 border-b border-green-900/30 flex items-center justify-between px-8 bg-black/40 backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="mono text-xs font-bold tracking-widest text-green-500 uppercase">IDS_CORE_ONLINE</span>
            </div>
            <div className="h-4 w-[1px] bg-green-900/50"></div>
            <div className="mono text-xs text-green-700">
              TARGET_HOST: <span className="text-green-500">IIOT_PLC_RACK_01</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="text-right">
              <p className="mono text-[10px] text-green-800 uppercase font-bold">Uptime</p>
              <p className="mono text-sm text-green-500 font-bold">{currentTime.toLocaleTimeString()}</p>
            </div>
            <div className="flex gap-4">
              <button className="text-green-800 hover:text-green-500 transition-colors p-2 rounded-lg hover:bg-green-500/5">
                <Bell size={20} />
              </button>
              <button className="text-green-800 hover:text-green-500 transition-colors p-2 rounded-lg hover:bg-green-500/5">
                <Settings size={20} />
              </button>
              <button className="text-red-900/50 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-500/5">
                <Power size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-transparent to-green-900/5">
          {renderContent()}
        </div>

        {/* Floating status bar */}
        <footer className="h-10 border-t border-green-900/30 flex items-center justify-between px-8 bg-black/60 text-[10px] mono text-green-900 uppercase tracking-tighter">
          <div className="flex gap-8">
            <span>Lat: 48.8566 | Lon: 2.3522</span>
            <span>IDS Efficiency: 99.4%</span>
            <span>Attack Buffer: [OK]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>DoS Mitigation Engaged</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
