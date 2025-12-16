import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({
  title,
  value,
  sub,
  icon: Icon,
  color,
}: any) {
  const variants = {
    blue: "text-blue-400 bg-blue-400/10",
    emerald: "text-emerald-400 bg-emerald-400/10",
    purple: "text-purple-400 bg-purple-400/10",
  };

  return (
    <Card className="bg-card/50 backdrop-blur border-border hover:bg-card/80 transition-colors">
      <CardContent className="p-6 flex items-center gap-4">
        <div
          className={`p-3 rounded-xl ${
            variants[color as keyof typeof variants]
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-2xl font-bold text-foreground">{value}</h4>
            <span className="text-xs text-muted-foreground">{sub}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
