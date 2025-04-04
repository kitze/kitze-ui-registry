import { z } from "zod"

export const Registry = z.object({ "name": z.string(), "homepage": z.string(), "items": z.array(z.any()) }).describe("A shadcn registry of components, hooks, pages, etc.")
