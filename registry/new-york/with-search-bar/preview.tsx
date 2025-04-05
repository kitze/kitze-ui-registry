import React, { useState } from "react";
import { WithSearchBar } from "./WithSearchBar";

export default function Preview() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Basic Usage</h3>
        <div className="border rounded-md p-4">
          <WithSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search content..."
          >
            <div className="flex items-center justify-between">
              <h4 className="text-md font-medium">Content Title</h4>
            </div>
          </WithSearchBar>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">With Content</h3>
        <div className="border rounded-md p-4">
          <WithSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Filter items..."
          >
            <div className="flex items-center justify-between w-full">
              <h4 className="text-md font-medium">Items List</h4>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200">
                  Filter
                </button>
                <button className="px-3 py-1 bg-gray-100 rounded text-sm hover:bg-gray-200">
                  Sort
                </button>
              </div>
            </div>
          </WithSearchBar>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">With Search Active</h3>
        <p className="text-sm text-gray-500 mb-2">
          Click the search icon to activate the search bar
        </p>
        <div className="border rounded-md p-4">
          <WithSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Type to search..."
          >
            <div className="flex items-center justify-between w-full">
              <h4 className="text-md font-medium">Interactive Example</h4>
              <span className="text-sm text-gray-500">Click search icon →</span>
            </div>
          </WithSearchBar>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Current Search Query:</h4>
        <pre className="bg-gray-100 p-2 rounded mt-1">
          {searchQuery || "(empty)"}
        </pre>
      </div>
    </div>
  );
}
