import { Radar } from "lucide-react";

export const BeaconHeader = () => {
  return (
    <div className="header-gradient rounded-2xl px-8 py-4 shadow-xl flex items-center justify-center gap-3 animate-fade-in">
      <Radar className="w-6 h-6 text-card-foreground" />
      <h1 className="text-2xl font-bold text-card-foreground tracking-wider">
        BEACON
      </h1>
    </div>
  );
};
