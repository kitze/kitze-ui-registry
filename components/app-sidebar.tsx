"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { componentGroups } from "@/lib/sidebar-data";
import Link from "next/link";
import { ThemeSwitchNextThemes } from "@/registry/new-york/theme-switch-slider-next-themes/ThemeSwitchNextThemes";
import { Twitter, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import { SearchBar } from "@/registry/new-york/search-bar/SearchBar";

// Helper function to format component names
const formatComponentName = (name: string) => {
  // Define special cases for capitalization
  const specialCases: Record<string, string> = {
    ui: "UI",
  };

  return name
    .split("-")
    .map((word) => {
      // Check if the word is a special case
      if (word.toLowerCase() in specialCases) {
        return specialCases[word.toLowerCase()];
      }
      // Standard capitalization
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Add our optimized components
const optimizedComponents = {
  title: "Optimized Components",
  components: [
    "twemoji-react",
    "twemoji-area",
    "search-bar",
    "with-search-bar",
    "dialog-manager",
    "segmented-control",
  ],
};

export function AppSidebar() {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = React.useState("");

  // Filter components based on search
  const getFilteredComponentGroups = () => {
    return [
      ...(optimizedComponents.components.some((component) =>
        component.toLowerCase().includes(searchValue.toLowerCase())
      )
        ? [optimizedComponents]
        : []),
      ...componentGroups.filter((group) =>
        group.components.some((component) =>
          component.toLowerCase().includes(searchValue.toLowerCase())
        )
      ),
    ];
  };

  const filteredGroups = getFilteredComponentGroups();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <Link href="/" className="font-bold text-lg">
            Kitze UI
          </Link>
          <a
            href="https://github.com/kitze/kitze-ui-repository"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-4 py-2 space-y-3">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search components..."
            autoFocus={false}
          />
        </div>
        <SidebarGroup>
          <SidebarMenu>
            {/* Render filtered component groups */}
            {filteredGroups.map((group, index) => (
              <React.Fragment key={index}>
                <SidebarMenuItem className="mb-1">
                  <div className="text-base font-medium px-3 py-2 border-b border-border">
                    {group.title}
                  </div>
                </SidebarMenuItem>
                <div className="mb-5 border-l-2 border-muted ml-4">
                  {group.components
                    .filter((component) =>
                      component
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((component, compIndex) => {
                      const isActive = pathname === `/component/${component}`;
                      return (
                        <SidebarMenuItem
                          key={`${index}-${compIndex}`}
                          className="pl-3"
                        >
                          <Link
                            href={`/component/${component}`}
                            className={`flex items-center py-1.5 px-3 text-sm rounded-md hover:bg-secondary ${
                              isActive ? "bg-secondary font-medium" : ""
                            }`}
                          >
                            {formatComponentName(component)}
                          </Link>
                        </SidebarMenuItem>
                      );
                    })}
                </div>
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <a
              href="https://twitter.com/thekitze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary"
            >
              <Twitter size={16} />
              <span>@thekitze</span>
            </a>
            <ThemeSwitchNextThemes />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
