export const getRegistryUrl = (name: string) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io";
  return `${url}/r/${name}.json`;
};
