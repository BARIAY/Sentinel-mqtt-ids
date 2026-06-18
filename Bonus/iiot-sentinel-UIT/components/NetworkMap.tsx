
import React, { useEffect, useRef } from 'react';

const NetworkMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    const particles: any[] = [];
    const target = { x: canvas.width / 2, y: canvas.height / 2 };

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.max(canvas.width, canvas.height) / 1.5;
      return {
        x: target.x + Math.cos(angle) * distance,
        y: target.y + Math.sin(angle) * distance,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 5 + 2,
        color: Math.random() > 0.8 ? '#ff0000' : '#00ff41'
      };
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Target (PLC)
      ctx.beginPath();
      ctx.arc(target.x, target.y, 40, 0, Math.PI * 2);
      ctx.strokeStyle = '#00ff41';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#050505';
      ctx.fill();
      
      ctx.font = '10px JetBrains Mono';
      ctx.fillStyle = '#00ff41';
      ctx.textAlign = 'center';
      ctx.fillText('INDUSTRIAL_GATEWAY', target.x, target.y + 5);

      // Inundation de particules (Attaque DoS)
      if (particles.length < 200) particles.push(createParticle());

      particles.forEach((p, i) => {
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < 40) {
          particles[i] = createParticle();
          // Effet d'impact
          ctx.beginPath();
          ctx.arc(target.x, target.y, 45, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
          ctx.stroke();
        } else {
          p.x += (dx / dist) * p.speed;
          p.y += (dy / dist) * p.speed;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      target.x = canvas.width / 2;
      target.y = canvas.height / 2;
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-full w-full cyber-card rounded-xl relative overflow-hidden bg-black/40">
      <div className="absolute top-4 left-4 z-10 mono text-[10px] text-green-500 uppercase bg-black/80 p-2 border border-green-900/50">
        Packet Flow Analysis: Active<br/>
        Threat Vector: Convergent_DoS
      </div>
      <canvas ref={canvasRef} className="w-full h-full opacity-80" />
      <div className="absolute bottom-4 right-4 z-10 flex gap-4">
        <div className="flex items-center gap-2 mono text-[10px]">
          <div className="w-2 h-2 rounded-full bg-green-500"></div> NORMAL_PKT
        </div>
        <div className="flex items-center gap-2 mono text-[10px]">
          <div className="w-2 h-2 rounded-full bg-red-500"></div> MALICIOUS_PKT
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
