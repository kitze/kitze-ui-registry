import * as React from "react";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col gap-1">
      <div className="relative h-64">
        <Image
          src="/spaceship.jpg"
          alt="Spaceship header image"
          layout="fill"
          objectFit="cover"
          className="w-full rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl" />
        <div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Kitze UI 🤝 shadcn
            </h1>
            <p className="text-white/80 text-xl">
              by{" "}
              <a
                href="https://twitter.com/thekitze"
                className="hover:text-white"
              >
                thekitze
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
