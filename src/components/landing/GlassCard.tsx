import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "blue" | "purple" | "emerald";
}

export default function GlassCard({ icon: Icon, title, description, color }: GlassCardProps) {
  const colorVariants = {
    blue: "text-blue-400 from-blue-500/20 to-purple-500/20",
    purple: "text-primary from-primary/20 to-pink-500/20",
    emerald: "text-emerald-400 from-emerald-500/20 to-teal-500/20",
  };

  return (
    <div className="group p-8 rounded-3xl bg-card border border-border backdrop-blur-sm hover:border-primary/50 hover:bg-muted/50 transition-all duration-300">
      <div
        className={`w-14 h-14 bg-linear-to-b ${colorVariants[color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
