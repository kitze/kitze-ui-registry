import React, { useState } from "react";
import { SearchBar } from "./SearchBar";

export default function Preview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Search Bar Component</h3>
        <div className="space-y-3">
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="Type to search..."
            autoFocus
          />

          <div className="bg-gray-50 p-3 rounded-md text-sm">
            <h4 className="font-medium mb-1">Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Left-aligned search icon for better UX</li>
              <li>Clear button (X) appears when text is entered</li>
              <li>Pressing ESC key clears input and triggers onForceClose</li>
              <li>Automatically focuses on mount when autoFocus is true</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Current value:</span>
            <code className="bg-gray-100 px-2 py-1 rounded">
              {value || "(empty)"}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
