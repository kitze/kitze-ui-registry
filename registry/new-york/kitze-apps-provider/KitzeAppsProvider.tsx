"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface KitzeApp {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

interface ProjectApiResponse {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  status: string;
  statusLabel: string;
  externalUrl?: string;
  category: string;
}

const PROJECTS_API_URL = "https://kitze.io/api/projects?apps=true";

interface KitzeAppsContextType {
  apps: KitzeApp[];
  isLoading: boolean;
}

const KitzeAppsContext = createContext<KitzeAppsContextType>({
  apps: [],
  isLoading: true,
});

export const useKitzeApps = () => useContext(KitzeAppsContext);

interface KitzeAppsProviderProps {
  children: ReactNode;
}

export const KitzeAppsProvider = ({ children }: KitzeAppsProviderProps) => {
  const [apps, setApps] = useState<KitzeApp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(PROJECTS_API_URL)
      .then((res) => res.json())
      .then((data: ProjectApiResponse[]) => {
        const mapped = data
          .filter((p) => p.externalUrl)
          .map((p) => ({
            name: p.title,
            tagline: p.subtitle,
            description: p.summary,
            url: p.externalUrl!,
          }));
        setApps(mapped);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <KitzeAppsContext.Provider value={{ apps, isLoading }}>
      {children}
    </KitzeAppsContext.Provider>
  );
};
