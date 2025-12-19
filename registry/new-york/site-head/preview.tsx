"use client";

export function Preview() {
  return (
    <div className="text-sm text-zinc-400 p-4 bg-zinc-900 rounded-lg">
      <p className="text-white font-medium mb-2">SiteHead Component</p>
      <p>Renders in {"<head>"} - includes:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Favicon links (16, 32, 96, 180, 192, 512)</li>
        <li>Web app manifest</li>
        <li>SEO meta tags</li>
        <li>OpenGraph meta tags</li>
        <li>Twitter card meta tags</li>
        <li>Theme color</li>
        <li>Optional JSON-LD structured data</li>
        <li>Optional DataFast analytics</li>
      </ul>
    </div>
  );
}
