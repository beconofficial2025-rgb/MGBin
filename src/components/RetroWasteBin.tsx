import { Recycle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RetroWasteBinProps {
  type: "paper" | "glass" | "plastic" | "metal" | "organic";
  fillLevel: number;
  delay?: number;
}

const binConfig = {
  paper: { 
    color: "from-bin-paper to-emerald-600", 
    glow: "shadow-[0_0_30px_hsl(142_70%_45%/0.4)]",
    label: "PAPER" 
  },
  glass: { 
    color: "from-bin-glass to-blue-600", 
    glow: "shadow-[0_0_30px_hsl(217_90%_55%/0.4)]",
    label: "GLASS" 
  },
  plastic: { 
    color: "from-bin-plastic to-yellow-500", 
    glow: "shadow-[0_0_30px_hsl(48_95%_55%/0.4)]",
    label: "PLASTIC" 
  },
  metal: { 
    color: "from-bin-metal to-slate-500", 
    glow: "shadow-[0_0_30px_hsl(220_15%_55%/0.4)]",
    label: "METAL" 
  },
  organic: { 
    color: "from-bin-organic to-orange-600", 
    glow: "shadow-[0_0_30px_hsl(25_90%_50%/0.4)]",
    label: "ORGANIC" 
  },
};

export const RetroWasteBin = ({ type, fillLevel, delay = 0 }: RetroWasteBinProps) => {
  const config = binConfig[type];
  const isAlmostFull = fillLevel >= 80;

  return (
    <div 
      className="group flex items-center gap-5 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Bin Container */}
      <div className="relative flex-shrink-0">
        {/* Pulse ring for almost full bins */}
        {isAlmostFull && (
          <div className={cn(
            "absolute inset-0 rounded-2xl animate-pulse-ring",
            config.glow
          )} />
        )}
        
        {/* Main Bin */}
        <div
          className={cn(
            "relative w-20 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-300",
            "bg-gradient-to-br border border-white/10",
            config.color,
            "group-hover:scale-105 group-hover:-translate-y-1",
            config.glow
          )}
        >
          {/* Lid */}
          <div className={cn(
            "absolute -top-2 left-2 right-2 h-4 rounded-t-xl",
            "bg-gradient-to-br border border-white/20",
            config.color,
            "brightness-110"
          )} />
          
          {/* Label */}
          <span className="text-[9px] font-display font-bold text-white/90 tracking-wider mt-2">
            {config.label}
          </span>
          
          {/* Icon */}
          <Recycle className="w-7 h-7 text-white/80 mt-1" />
          
          {/* Fill Level Indicator on bin */}
          <div className="absolute bottom-2 left-2 right-2 h-1.5 bg-black/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/60 rounded-full transition-all duration-700"
              style={{ width: `${fillLevel}%` }}
            />
          </div>
        </div>
      </div>

      {/* Progress Track */}
      <div className="flex-1 relative">
        <div className="h-12 glass-card rounded-2xl overflow-hidden p-1">
          {/* Background with grid */}
          <div className="absolute inset-0 retro-grid opacity-30" />
          
          {/* Progress Fill */}
          <div className="relative h-full rounded-xl overflow-hidden bg-muted/50">
            <div
              className={cn(
                "h-full rounded-xl transition-all duration-700 ease-out relative overflow-hidden",
                "bg-gradient-to-r",
                config.color
              )}
              style={{ width: `${fillLevel}%` }}
            >
              {/* Animated shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
            
            {/* Thumb */}
            <div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full transition-all duration-700",
                "bg-gradient-to-br border-2 border-white/50",
                config.color,
                config.glow
              )}
              style={{ left: `calc(${fillLevel}% - 16px)` }}
            >
              <div className="absolute inset-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
        
        {/* Percentage */}
        <div className={cn(
          "absolute -right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg",
          "glass-card font-display text-sm font-bold",
          isAlmostFull ? "text-destructive" : "text-foreground"
        )}>
          {Math.round(fillLevel)}%
        </div>
      </div>
    </div>
  );
};
