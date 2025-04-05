import React from "react";
import { TwemojiArea } from "./TwemojiArea";

export default function Preview() {
  return (
    <div className="flex flex-col gap-4 p-4 text-sm">
      <div>
        <h3 className="text-lg font-medium mb-2">Basic Usage</h3>
        <TwemojiArea>
          <p>Hello! 👋 This is a simple emoji example 🚀</p>
        </TwemojiArea>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Different Sizes</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <TwemojiArea size="xs">
              <p>Extra small emoji 🎯</p>
            </TwemojiArea>
          </div>
          <div>
            <TwemojiArea size="sm">
              <p>Small emoji 🎯</p>
            </TwemojiArea>
          </div>
          <div>
            <TwemojiArea size="md">
              <p>Medium emoji 🎯 (default)</p>
            </TwemojiArea>
          </div>
          <div>
            <TwemojiArea size="lg">
              <p>Large emoji 🎯</p>
            </TwemojiArea>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Use Cases</h3>
        <TwemojiArea className="p-4 bg-blue-50 rounded-md border border-blue-200">
          <p className="font-medium">
            Emojis in comments 💬 or social posts 📱
          </p>
          <p className="mt-2">
            Perfect for chat messages 💌 and reaction systems 👍
          </p>
        </TwemojiArea>
      </div>
    </div>
  );
}
