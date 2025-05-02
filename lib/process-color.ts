export const processColor = (c: string | undefined): string | undefined => {
  if (!c) return undefined;
  return c.startsWith("bg-") ? c.substring(3) : c;
};
