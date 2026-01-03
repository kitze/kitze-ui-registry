"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useKitzeApps } from "@/components/ui/KitzeAppsProvider";

export interface KitzeAppLink {
  name: string;
  url: string;
}

export interface FooterColumnKitzeAppsProps {
  /** App name to exclude from the list (typically the current app) */
  excludeApp?: string;
  /** Ref parameter to append to URLs */
  refParam?: string;
  /** Custom apps list (overrides fetched) */
  apps?: KitzeAppLink[];
  /** Custom title */
  title?: string;
  /** Additional className */
  className?: string;
}

export const FooterColumnKitzeApps = ({
  excludeApp,
  refParam,
  apps: customApps,
  title = "More by Kitze",
  className,
}: FooterColumnKitzeAppsProps) => {
  const { apps: fetchedApps, isLoading } = useKitzeApps();

  const apps = customApps || fetchedApps.map((a) => ({ name: a.name, url: a.url }));
  const filteredApps = excludeApp
    ? apps.filter((app) => app.name.toLowerCase() !== excludeApp.toLowerCase())
    : apps;

  const getUrl = (url: string) => {
    if (!refParam) return url;
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}ref=${refParam}`;
  };

  if (isLoading && !customApps) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="font-semibold text-sm text-white flex items-center gap-2">
        {title}
        <span className="text-[10px] text-zinc-600 font-normal">&#8599;</span>
      </h4>
      <div className="flex flex-col gap-3 text-sm text-zinc-500">
        {filteredApps.map((app) => (
          <a
            key={app.name}
            href={getUrl(app.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors group flex items-center gap-1 cursor-pointer"
          >
            {app.name}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};
