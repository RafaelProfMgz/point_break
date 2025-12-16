import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-50 bg-muted/50" />
          <Skeleton className="h-4 w-75 bg-muted/50" />
        </div>
        <Skeleton className="h-10 w-30 bg-muted/50" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-37.5 rounded-xl bg-muted/50" />
        <Skeleton className="h-37.5 rounded-xl bg-muted/50" />
        <Skeleton className="h-37.5 rounded-xl bg-muted/50" />
      </div>

      <div className="space-y-4 pt-6">
        <Skeleton className="h-12 w-full bg-muted/50" />
        <Skeleton className="h-12 w-full bg-muted/50" />
        <Skeleton className="h-12 w-full bg-muted/50" />
      </div>
    </div>
  );
}
