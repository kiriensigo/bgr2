"use client";

import { SnackbarProvider } from "@/contexts/SnackbarContext";
import { FlashMessage } from "@/components/FlashMessage";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider>
      {children}
      <FlashMessage />
    </SnackbarProvider>
  );
}
