import { createContext, useState } from "react";
import type { ReactElement } from "react";

/**
 * Defines the shape of the LoaderContext.
 */
export type LoaderContextProps = {
  isLoading: boolean;
  handleIsLoadingChange(isLoading: boolean): void;
};

/**
 * Context for managing loader state.
 */
export const LoaderContext = createContext<LoaderContextProps>({
  isLoading: false,
  handleIsLoadingChange: () => {},
});

/**
 * Props for the `LoaderContextProvider` component.
 */
type LoaderContextProviderProps = {
  children: ReactElement;
};

/**
 * Provider component for managing loader state.
 * @param children - The child elements to be wrapped by the `LoaderContextProvider`.
 * @returns The `LoaderContextProvider` component.
 */
export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps): ReactElement {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles the change in loading state.
   * @param isLoading - Boolean value indicating whether the loader is active.
   */
  const handleIsLoadingChange = (isLoading: boolean): void => {
    setIsLoading(isLoading);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, handleIsLoadingChange }}>
      {children}
    </LoaderContext.Provider>
  );
}
