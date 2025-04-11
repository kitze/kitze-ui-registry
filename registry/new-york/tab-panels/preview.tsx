"use client";

import React, { useState } from "react";
import { TabPanels } from "./TabPanels";
import { User, Settings, Bell } from "lucide-react";
import { KitzeUIProvider } from "../kitze-ui-context/KitzeUIContext";

const tabs = [
  {
    value: "account",
    label: "Account",
    icon: User,
    content: <div className="p-4">Account Settings Content</div>,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: Bell,
    content: <div className="p-4">Notifications Settings Content</div>,
  },
  {
    value: "general",
    label: "General",
    icon: Settings,
    content: <div className="p-4">General Settings Content</div>,
  },
];

const Preview = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="vertical gap-8 p-4">
      {/* Example 1: Default */}
      <div>
        <h3 className="text-lg font-medium mb-2">Default (Keep on Mobile)</h3>
        <TabPanels
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          title="Settings"
          mobileView="keep" // Explicitly set keep
        />
      </div>

      {/* Example 2: Mobile Bottom Drawer */}
      <div>
        <h3 className="text-lg font-medium mb-2">Mobile: Bottom Drawer</h3>
        <KitzeUIProvider isMobile={true}>
          <TabPanels
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            title="Settings"
            mobileView="bottom-drawer"
            placeholder="Select Tab"
            drawerTitle="Select Tab"
          />
        </KitzeUIProvider>
      </div>

      {/* Example 3: Mobile Native Select */}
      <div>
        <h3 className="text-lg font-medium mb-2">Mobile: Native Select</h3>
        <KitzeUIProvider isMobile={true}>
          <TabPanels
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            title="Settings"
            mobileView="native"
            placeholder="Select Tab"
          />
        </KitzeUIProvider>
      </div>
    </div>
  );
};

export default Preview;
