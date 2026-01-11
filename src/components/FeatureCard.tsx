import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  style,
}: FeatureCardProps) => {
  return (
    <div
      style={style}
      className={cn(
        "bg-secondary/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-secondary-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};
