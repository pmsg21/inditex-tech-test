import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient();

type TestQueryClientProviderProps = {
  children: ReactNode;
};

export const TestQueryClientProvider = ({
  children,
}: TestQueryClientProviderProps): ReactElement => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
