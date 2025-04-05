import React from "react";
import { TwemojiReact } from "./TwemojiReact";

export default function Preview() {
  return (
    <div className="flex flex-col gap-6 p-4 text-sm">
      <div>
        <h3 className="text-lg font-medium mb-2">Basic Usage</h3>
        <TwemojiReact options={{ size: "1em" }}>
          <p>Hello! 👋 This is a simple emoji example 🚀</p>
        </TwemojiReact>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Custom Tag</h3>
        <TwemojiReact tag="span" options={{ size: "1em" }}>
          <span>Inline emoji example 🎉</span>
        </TwemojiReact>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">No Wrapper</h3>
        <TwemojiReact noWrapper options={{ size: "1em" }}>
          <div>This is component with no wrapper 🎮</div>
          <div>Each child is parsed separately 🔥</div>
        </TwemojiReact>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Examples</h3>
        <TwemojiReact options={{ size: "1em" }}>
          <div className="p-4 border rounded-md bg-gray-50">
            <h4 className="font-bold">Emoji Examples:</h4>
            <ul className="list-disc list-inside">
              <li>Animals: 🐶 🐱 🦊 🐻</li>
              <li>Food: 🍕 🍔 🍦 🍎</li>
              <li>Sports: ⚽ 🏀 🎾 🏈</li>
              <li>Travel: ✈️ 🚗 🚆 🚢</li>
            </ul>
          </div>
        </TwemojiReact>
      </div>
    </div>
  );
}
