import { BrowserRouter } from "react-router-dom";
import type { ReactNode } from "react";

const future = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

export function Router({ children }: { children: ReactNode }) {
  return <BrowserRouter future={future}>{children}</BrowserRouter>;
}
