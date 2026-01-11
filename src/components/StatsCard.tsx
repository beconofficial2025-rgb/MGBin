import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  trend?: "up" | "down";
  className?: string;
}

export const StatsCard = ({ value, label, trend, className }: StatsCardProps) => {
  return (
    <div
      className={cn(
        "bg-secondary/60 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg animate-slide-up",
        className
      )}
    >
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
      {trend && (
        <span
          className={cn(
            "text-xs font-medium",
            trend === "up" ? "text-bin-paper" : "text-destructive"
          )}
        >
          {trend === "up" ? "↑ 12%" : "↓ 5%"}
        </span>
      )}
    </div>
  );
};
