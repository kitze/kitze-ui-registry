"use client";

import * as React from "react";
import { ConditionalWrap } from "./ConditionalWrap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Preview() {
  const [isWrapped, setIsWrapped] = React.useState(false);
  const [useElseWrap, setUseElseWrap] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => setIsWrapped((w) => !w)}>
          Toggle Wrap: {isWrapped ? "On" : "Off"}
        </Button>
        <Button variant="outline" onClick={() => setUseElseWrap((e) => !e)}>
          Toggle Else Wrap: {useElseWrap ? "On" : "Off"}
        </Button>
      </div>

      <ConditionalWrap
        condition={isWrapped}
        wrap={(children) => (
          <Card className="p-4 border-green-500">{children}</Card>
        )}
        elseWrap={
          useElseWrap
            ? (children) => (
                <Card className="p-4 border-red-500">{children}</Card>
              )
            : undefined
        }
      >
        <div className="p-4 text-center">
          <p>This content will be wrapped in a green card if wrap is on</p>
          <p>Or in a red card if wrap is off but else wrap is on</p>
          <p>Or not wrapped at all if both are off</p>
        </div>
      </ConditionalWrap>
    </div>
  );
}
