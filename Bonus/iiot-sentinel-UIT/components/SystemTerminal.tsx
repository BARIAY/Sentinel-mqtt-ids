
import React, { useState, useEffect, useRef } from 'react';

const SystemTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "Initializing IIoT Kernel...",
    "Loading IDS neural weights...",
    "Scanning SCADA gateway at 192.168.1.1...",
    "Handshake verified. Node 001 connected.",
    "Ready for user input."
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newLines = [...lines, `> ${input}`];
    
    // Simple command simulation
    if (input === 'help') {
      newLines.push("Available commands: scan, clear, status, alert, help");
    } else if (input === 'clear') {
      setLines(["Terminal cleared."]);
      setInput("");
      return;
    } else if (input === 'scan') {
      newLines.push("Scanning network ports 1-1024...");
      newLines.push("Found active Modbus service on port 502.");
      newLines.push("Scan complete.");
    } else {
      newLines.push(`Command not recognized: ${input}`);
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <div className="h-full flex flex-col cyber-card rounded-lg overflow-hidden border-green-500/30">
      <div className="bg-green-900/20 px-4 py-2 flex justify-between items-center border-b border-green-500/30">
        <span className="mono text-xs text-green-500 font-bold uppercase tracking-wider">Secure CLI v1.0.4</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-green-900"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 mono text-xs overflow-y-auto space-y-1">
        {lines.map((line, idx) => (
          <div key={idx} className={line.startsWith('>') ? 'text-green-400' : 'text-green-500'}>
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2 text-green-400">
          <span>{'>'}</span>
          <form onSubmit={handleCommand} className="flex-1">
            <input
              autoFocus
              className="bg-transparent border-none outline-none w-full caret-green-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SystemTerminal;
