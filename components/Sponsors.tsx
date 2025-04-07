import * as React from "react";

export function Sponsors() {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-6">Our Sponsors</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="https://sizzy.co"
          target="_blank"
          rel="noopener noreferrer"
          className="group border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/10 dark:from-slate-800/50 dark:to-slate-900/70 backdrop-blur-sm hover:border-primary/50 cursor-pointer no-underline"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src="/logos/sizzy.png"
              alt="Sizzy"
              className="h-16 mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              Sizzy
            </h4>
          </div>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            The browser for developers. Build and test responsive websites
            faster with features like multiple devices, full page screenshots,
            etc.
          </p>
        </a>

        <a
          href="https://benji.so"
          target="_blank"
          rel="noopener noreferrer"
          className="group border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/10 dark:from-slate-800/50 dark:to-slate-900/70 backdrop-blur-sm hover:border-primary/50 cursor-pointer no-underline"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src="/logos/benji.png"
              alt="Benji"
              className="h-16 mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              Benji
            </h4>
          </div>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            The Life OS. Organize your personal and professional life with a
            unified platform for todos, habits, planner, goals, and 35+ other
            features.
          </p>
        </a>

        <a
          href="https://zerotoshipped.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-gradient-to-br from-white/50 to-white/10 dark:from-slate-800/50 dark:to-slate-900/70 backdrop-blur-sm hover:border-primary/50 cursor-pointer no-underline"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src="/logos/zerotoshipped.webp"
              alt="Zero to Shipped"
              className="h-16 mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              Zero to Shipped
            </h4>
          </div>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            The ultimate Next.js template. Launch your SaaS or web app faster
            with authentication, payments, and UI components pre-configured.
          </p>
        </a>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://kitze.lemonsqueezy.com/buy/8b946195-05b4-4b3b-b56a-3dd5b2dea781"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md shadow-sm hover:bg-primary/90 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want your logo here?
        </a>
      </div>
    </div>
  );
}
