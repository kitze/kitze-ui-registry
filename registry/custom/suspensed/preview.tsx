"use client";

import * as React from "react";
import { Suspensed } from "./Suspensed";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/registry/custom/spinner/Spinner";

export function Preview() {
  const [isForced, setIsForced] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsForced((f) => !f)} variant="outline">
        Toggle Force: {isForced ? "On" : "Off"}
      </Button>
      <div className="vertical flex items-center justify-center w-[300px] h-[200px] border rounded-md overflow-hidden">
        <Suspensed
          force={isForced}
          fallback={<Spinner variant="default" size="md" />}
        >
          <div className="w-full h-full flex items-center justify-center p-4 text-center">
            Content is visible when force is off
          </div>
        </Suspensed>
      </div>
    </div>
  );
}
