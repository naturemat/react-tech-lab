import type { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return <h1 style={{ marginBottom: "1rem" }}>{children}</h1>;
}
