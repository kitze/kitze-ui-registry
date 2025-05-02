import * as React from "react";

export function SectionWelcome() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Welcome to Kitze UI</h2>
      <p className="text-lg mb-6">
        The most important thing to know is this is <b>NOT</b> an alternative to
        shadcn/ui. They&apos;re meant to work together. As indicated by the two
        guys sitting in the spaceship, and the handshake. How could you miss
        that part?
        <br /> <br /> Kitze UI is a collection of reusable components compatible
        with the shadcn CLI, designed to make building beautiful and functional
        interfaces easier, and with much less boilerplate.
      </p>
      <p className="text-lg">
        Browse the components using the sidebar to find the right tools for your
        next project. Each component comes with a live preview and usage
        examples.
      </p>
    </div>
  );
}
