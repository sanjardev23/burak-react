import { BrowserRouter } from "react-router-dom";
import type { ReactNode } from "react";

export function Router({ children }: { children: ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
