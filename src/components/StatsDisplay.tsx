import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  trend?: "up" | "down";
  trendValue?: string;
  delay?: number;
}

export const StatItem = ({ value, label, trend, trendValue, delay = 0 }: StatItemProps) => {
  return (
    <div 
      className="glass-card rounded-2xl p-5 text-center animate-scale-in hover:neon-glow transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-display text-3xl font-bold text-primary text-glow mb-1">
        {value}
      </p>
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      {trend && (
        <div className={cn(
          "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
          trend === "up" ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
        )}>
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {trendValue}
        </div>
      )}
    </div>
  );
};

interface StatsDisplayProps {
  stats: StatItemProps[];
}

export const StatsDisplay = ({ stats }: StatsDisplayProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} delay={index * 100} />
      ))}
    </div>
  );
};
