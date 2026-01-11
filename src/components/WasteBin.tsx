import { Recycle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WasteBinProps {
  type: "paper" | "glass" | "plastic" | "metal" | "organic";
  fillLevel: number;
  className?: string;
}

const binColors = {
  paper: "bg-bin-paper",
  glass: "bg-bin-glass",
  plastic: "bg-bin-plastic",
  metal: "bg-bin-metal",
  organic: "bg-bin-organic",
};

const binLabels = {
  paper: "PAPER",
  glass: "GLASS",
  plastic: "PLASTIC",
  metal: "METAL",
  organic: "ORGANIC",
};

export const WasteBin = ({ type, fillLevel, className }: WasteBinProps) => {
  return (
    <div className={cn("flex items-center gap-4 animate-slide-up", className)}>
      {/* Bin Icon */}
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            "w-16 h-20 rounded-t-lg rounded-b-xl flex flex-col items-center justify-center shadow-lg",
            binColors[type]
          )}
        >
          <span className="text-[10px] font-bold text-white/90 mb-1">
            {binLabels[type]}
          </span>
          <Recycle className="w-6 h-6 text-white/80" />
        </div>
        {/* Bin lid */}
        <div
          className={cn(
            "absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-3 rounded-t-lg",
            binColors[type],
            "brightness-90"
          )}
        />
      </div>

      {/* Progress Bar */}
      <div className="flex-1 relative">
        <div className="h-10 bg-progress-bg rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-progress-thumb to-accent rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${fillLevel}%` }}
          >
            {/* Thumb indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-progress-thumb rounded-full shadow-md border-2 border-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
};
