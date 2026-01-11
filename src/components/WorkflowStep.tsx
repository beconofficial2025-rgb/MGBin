import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
  color: string;
  glowColor: string;
  isLast?: boolean;
  delay?: number;
}

export const WorkflowStep = ({
  icon: Icon,
  title,
  description,
  stepNumber,
  color,
  glowColor,
  isLast = false,
  delay = 0,
}: WorkflowStepProps) => {
  return (
    <div 
      className="flex items-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group">
        {/* Pulse ring */}
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl animate-pulse-ring opacity-0 group-hover:opacity-100 transition-opacity",
            glowColor
          )} 
        />
        
        {/* Step Card */}
        <div className={cn(
          "relative glass-card rounded-2xl p-5 min-w-[140px] transition-all duration-300",
          "hover:scale-105 hover:-translate-y-1 cursor-pointer",
          "border-2",
          color
        )}>
          {/* Step Number */}
          <div className={cn(
            "absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center",
            "font-display text-sm font-bold border-2",
            "bg-background",
            color
          )}>
            {stepNumber}
          </div>
          
          {/* Icon */}
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
            "bg-gradient-to-br from-secondary to-muted"
          )}>
            <Icon className={cn("w-6 h-6", color.replace("border-", "text-"))} />
          </div>
          
          {/* Content */}
          <h3 className="font-display text-sm font-bold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Arrow */}
      {!isLast && (
        <div className="mx-3 flex-shrink-0">
          <div className="relative">
            <div className="w-12 h-0.5 bg-gradient-to-r from-border to-primary/50" />
            <ChevronRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};
