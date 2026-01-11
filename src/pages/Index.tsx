import { useState, useEffect } from "react";
import { BeaconLogo } from "@/components/BeaconLogo";
import { RetroWasteBin } from "@/components/RetroWasteBin";
import { WorkflowStep } from "@/components/WorkflowStep";
import { StatsDisplay } from "@/components/StatsDisplay";
import { FeatureGrid } from "@/components/FeatureGrid";
import {
  Trash2,
  Cpu,
  GitBranch,
  Cog,
  Leaf,
  Activity,
  Bell,
  Layers,
  Recycle,
  Zap,
} from "lucide-react";

const Index = () => {
  const [fillLevels, setFillLevels] = useState({
    paper: 45,
    glass: 30,
    plastic: 65,
    metal: 50,
    organic: 82,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setFillLevels((prev) => ({
        paper: Math.min(100, Math.max(0, prev.paper + (Math.random() * 4 - 1.5))),
        glass: Math.min(100, Math.max(0, prev.glass + (Math.random() * 4 - 1.5))),
        plastic: Math.min(100, Math.max(0, prev.plastic + (Math.random() * 4 - 1.5))),
        metal: Math.min(100, Math.max(0, prev.metal + (Math.random() * 4 - 1.5))),
        organic: Math.min(100, Math.max(0, prev.organic + (Math.random() * 4 - 1.5))),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    {
      icon: Trash2,
      title: "INPUT",
      description: "Waste disposal",
      color: "border-workflow-input text-workflow-input",
      glowColor: "shadow-[0_0_20px_hsl(280_70%_55%/0.4)]",
    },
    {
      icon: Cpu,
      title: "DETECT",
      description: "AI + Sensors",
      color: "border-accent text-accent",
      glowColor: "shadow-[0_0_20px_hsl(180_100%_45%/0.4)]",
    },
    {
      icon: GitBranch,
      title: "SEPARATE",
      description: "Auto sorting",
      color: "border-primary text-primary",
      glowColor: "shadow-[0_0_20px_hsl(142_70%_50%/0.4)]",
    },
    {
      icon: Cog,
      title: "PROCESS",
      description: "Convert waste",
      color: "border-workflow-process text-workflow-process",
      glowColor: "shadow-[0_0_20px_hsl(48_95%_55%/0.4)]",
    },
    {
      icon: Leaf,
      title: "OUTPUT",
      description: "Manure/Recycle",
      color: "border-workflow-output text-workflow-output",
      glowColor: "shadow-[0_0_20px_hsl(25_90%_50%/0.4)]",
    },
  ];

  const stats = [
    { value: "5", label: "Compartments" },
    { value: "92%", label: "Efficiency", trend: "up" as const, trendValue: "+8%" },
    { value: "24/7", label: "Monitoring" },
    { value: "2.4K", label: "Kg Processed", trend: "up" as const, trendValue: "+12%" },
  ];

  const features = [
    {
      icon: Activity,
      title: "REAL-TIME MONITORING",
      description: "Track organic waste conversion to valuable fertilizer in real-time.",
      color: "text-primary",
    },
    {
      icon: Layers,
      title: "COMPARTMENT STATUS",
      description: "Live updates on each waste compartment's fill level.",
      color: "text-accent",
    },
    {
      icon: Bell,
      title: "SMART NOTIFICATIONS",
      description: "Pre-alerts before bins reach capacity for timely collection.",
      color: "text-workflow-process",
    },
    {
      icon: Recycle,
      title: "AUTO SEPARATION",
      description: "AI-powered sensors automatically sort waste into correct bins.",
      color: "text-workflow-output",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 retro-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 scanline pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <BeaconLogo />
          <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">System Active</span>
          </div>
        </header>

        {/* Hero */}
        <section className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-wide">
            Bringing <span className="text-primary text-glow">Change</span>
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-wide">
            to the <span className="text-accent text-glow-accent">Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Smart waste management system for efficient segregation and conversion to valuable products
          </p>
        </section>

        {/* Workflow Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h3 className="font-display text-lg font-bold text-foreground tracking-wider">
              SYSTEM WORKFLOW
            </h3>
          </div>
          
          <div className="glass-card rounded-3xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center justify-start md:justify-center gap-2 min-w-max">
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  color={step.color}
                  glowColor={step.glowColor}
                  isLast={index === workflowSteps.length - 1}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Waste Bins Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="font-display text-lg font-bold text-foreground tracking-wider">
                COMPARTMENT LEVELS
              </h3>
            </div>
            
            <div className="glass-card rounded-3xl p-6 space-y-5">
              <RetroWasteBin type="paper" fillLevel={fillLevels.paper} delay={0} />
              <RetroWasteBin type="glass" fillLevel={fillLevels.glass} delay={100} />
              <RetroWasteBin type="plastic" fillLevel={fillLevels.plastic} delay={200} />
              <RetroWasteBin type="metal" fillLevel={fillLevels.metal} delay={300} />
              <RetroWasteBin type="organic" fillLevel={fillLevels.organic} delay={400} />
            </div>
          </section>

          {/* Features Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-workflow-process animate-pulse" />
              <h3 className="font-display text-lg font-bold text-foreground tracking-wider">
                KEY FEATURES
              </h3>
            </div>
            
            <FeatureGrid features={features} />
            
            {/* CTA */}
            <div className="glass-card rounded-3xl p-8 mt-6 text-center gradient-border">
              <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                #Don't wait for the Change
              </p>
              <p className="font-display text-xl md:text-2xl font-bold">
                <span className="text-primary text-glow">Bring it Today</span>
              </p>
            </div>
          </section>
        </div>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-workflow-output animate-pulse" />
            <h3 className="font-display text-lg font-bold text-foreground tracking-wider">
              SYSTEM METRICS
            </h3>
          </div>
          
          <StatsDisplay stats={stats} />
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm">
          <p className="font-display tracking-wider">
            BEACON © 2025 — Smart India Hackathon
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
