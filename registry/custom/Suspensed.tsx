import { ReactNode, Suspense } from "react";

interface SuspensedProps {
  children: ReactNode;
  fallback?: ReactNode;
  force?: boolean;
}

export const Suspensed = ({
  children,
  fallback = null,
  force = false,
}: SuspensedProps) => {
  if (force) {
    return fallback;
  }
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
