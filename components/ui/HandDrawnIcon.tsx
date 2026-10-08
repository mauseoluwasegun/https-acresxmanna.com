import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import * as I from "@/components/ui/icons";

export type IconName =
  | "seed"
  | "wheat"
  | "factory"
  | "box"
  | "plate"
  | "globe"
  | "cart"
  | "farmer"
  | "farmers"
  | "communities"
  | "truck"
  | "handshake"
  | "briefcase"
  | "user"
  | "products"
  | "markets"
  | "jobs"
  | "capacity";

const registry: Record<IconName, (p: any) => ReactNode> = {
  seed: I.IconSeed,
  wheat: I.IconWheat,
  factory: I.IconFactory,
  box: I.IconBox,
  plate: I.IconPlate,
  globe: I.IconGlobe,
  cart: I.IconCart,
  farmer: I.IconFarmers,
  farmers: I.IconFarmers,
  communities: I.IconCommunities,
  truck: I.IconTruck,
  handshake: I.IconHandshake,
  briefcase: I.IconBriefcase,
  user: I.IconUser,
  products: I.IconProductsIcon,
  markets: I.IconMarkets,
  jobs: I.IconJobs,
  capacity: I.IconCapacity,
};

export function HandDrawnIcon({
  name,
  size = 48,
  className,
  color = "terracotta",
  withFrame = true,
}: {
  name: IconName;
  size?: number;
  className?: string;
  color?: "terracotta" | "mango" | "forest" | "indigo" | "earth";
  withFrame?: boolean;
}) {
  const Icon = registry[name] ?? I.IconWheat;
  const colorClass =
    color === "terracotta"
      ? "text-terracotta-600"
      : color === "mango"
        ? "text-mango-500"
        : color === "forest"
          ? "text-forest-700"
          : color === "indigo"
            ? "text-indigo-700"
            : "text-earth-600";

  if (!withFrame) {
    return (
      <div className={cn("inline-flex items-center justify-center", colorClass, className)}>
        <Icon size={size} />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center p-3 rounded-soft-lg bg-woven",
        className,
      )}
      aria-hidden
    >
      <div className="bg-cream-50 p-3 rounded-soft ring-1 ring-cream-50/30">
        <div className={colorClass}>
          <Icon size={size} />
        </div>
      </div>
    </div>
  );
}
