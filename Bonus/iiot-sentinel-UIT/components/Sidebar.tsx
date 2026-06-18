
import React from 'react';
import { LayoutDashboard, ShieldAlert, Activity, Cpu, Terminal, Search, Info } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'logs', label: 'Attack Logs', icon: ShieldAlert },
    { id: 'network', label: 'Network Map', icon: Activity },
    { id: 'forensics', label: 'AI Forensics', icon: Search },
    { id: 'terminal', label: 'System CLI', icon: Terminal },
    { id: 'about', label: 'Project Info', icon: Info },
  ];

  return (
    <div className="w-64 h-full border-r border-green-900/50 flex flex-col bg-black/40 backdrop-blur-md">
      <div className="p-6 border-b border-green-900/50">
        <h1 className="text-xl font-bold glow-text flex items-center gap-2 mono">
          <ShieldAlert className="text-green-500" size={24} />
          IIOT_SENTINEL
        </h1>
        <p className="text-[10px] text-green-700/80 mt-1 uppercase tracking-widest mono">Project Cyber-IDS V.UIT</p>
      </div>
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-200 group ${
                isActive 
                ? 'bg-green-500/10 text-green-400 border-r-2 border-green-500' 
                : 'text-green-800 hover:text-green-500 hover:bg-green-500/5'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-green-400' : 'text-green-800 group-hover:text-green-500'} />
              <span className="mono text-sm font-medium tracking-tight uppercase">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-6 border-t border-green-900/50 text-[10px] mono text-green-900">
        SYSTEM UPTIME: 142:54:12<br />
        ENCRYPTION: AES-256-GCM<br />
        SECURE_CONNECTION: ESTABLISHED
      </div>
    </div>
  );
};

export default Sidebar;
