import { z } from "zod"

export const Registry_item = z.object({ "name": z.string().describe("The name of the item. This is used to identify the item in the registry. It should be unique for your registry."), "type": z.enum(["registry:lib","registry:block","registry:component","registry:ui","registry:hook","registry:theme","registry:page","registry:file","registry:style"]).describe("The type of the item. This is used to determine the type and target path of the item when resolved for a project."), "description": z.string().describe("The description of the item. This is used to provide a brief overview of the item.").optional(), "title": z.string().describe("The human-readable title for your registry item. Keep it short and descriptive.").optional(), "author": z.string().describe("The author of the item. Recommended format: username <url>").optional(), "dependencies": z.array(z.string()).describe("An array of NPM dependencies required by the registry item.").optional(), "devDependencies": z.array(z.string()).describe("An array of NPM dev dependencies required by the registry item.").optional(), "registryDependencies": z.array(z.string()).describe("An array of registry items that this item depends on. Use the name of the item to reference shadcn/ui components and urls to reference other registries.").optional(), "files": z.array(z.object({ "path": z.string().describe("The path to the file relative to the registry root.").optional(), "content": z.string().describe("The content of the file.").optional(), "type": z.enum(["registry:lib","registry:block","registry:component","registry:ui","registry:hook","registry:theme","registry:page","registry:file"]).describe("The type of the file. This is used to determine the type of the file when resolved for a project.").optional(), "target": z.string().describe("The target path of the file. This is the path to the file in the project.").optional() })).describe("The main payload of the registry item. This is an array of files that are part of the registry item. Each file is an object with a path, content, type, and target.").optional(), "tailwind": z.object({ "config": z.object({ "content": z.array(z.string()).optional(), "theme": z.record(z.any()).optional(), "plugins": z.array(z.string()).optional() }).optional() }).describe("The tailwind configuration for the registry item. This is an object with a config property. Use cssVars for Tailwind v4 projects.").optional(), "cssVars": z.object({ "theme": z.record(z.string()).describe("CSS variables for the @theme directive. For Tailwind v4 projects only. Use tailwind for older projects.").optional(), "light": z.record(z.string()).describe("CSS variables for the light theme.").optional(), "dark": z.record(z.string()).describe("CSS variables for the dark theme.").optional() }).describe("The css variables for the registry item. This will be merged with the project's css variables.").optional(), "css": z.record(z.any().superRefine((x, ctx) => {
    const schemas = [z.string().describe("Direct CSS string (e.g., 'font-family: sans-serif; line-height: 1.5;')"), z.record(z.any().superRefine((x, ctx) => {
    const schemas = [z.string().describe("CSS property value (e.g., 'blue', 'var(--color-primary)')"), z.record(z.string().describe("CSS property value for nested rule")).describe("Nested selector or rule with properties")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })).describe("CSS properties or nested selectors")];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })).describe("CSS definitions to be added to the project's CSS file. Supports at-rules, selectors, nested rules, utilities, layers, and more.").optional(), "meta": z.record(z.any()).describe("Additional metadata for the registry item. This is an object with any key value pairs.").optional(), "docs": z.string().describe("The documentation for the registry item. This is a markdown string.").optional(), "categories": z.array(z.string().describe("The categories of the registry item. This is an array of strings.")).optional(), "extends": z.string().describe("The name of the registry item to extend. This is used to extend the base shadcn/ui style. Set to none to start fresh. This is available for registry:style items only.").optional() })
