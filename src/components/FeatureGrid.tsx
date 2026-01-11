import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn(
            "glass-card rounded-2xl p-5 animate-fade-in",
            "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300",
            "group cursor-pointer"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className={cn(
              "p-3 rounded-xl transition-all duration-300",
              "bg-secondary group-hover:scale-110",
              feature.color
            )}>
              <feature.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
