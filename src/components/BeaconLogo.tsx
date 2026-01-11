import { Radar } from "lucide-react";

export const BeaconLogo = () => {
  return (
    <div className="relative inline-flex items-center gap-3 group">
      {/* Animated rings */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
        
        <div className="relative w-14 h-14 rounded-full glass-card flex items-center justify-center neon-glow">
          <Radar className="w-7 h-7 text-primary" />
        </div>
      </div>
      
      {/* Text */}
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground tracking-wider text-glow">
          BEACON
        </h1>
        <p className="text-xs text-muted-foreground tracking-[0.2em]">
          SMART WASTE SYSTEM
        </p>
      </div>
    </div>
  );
};
