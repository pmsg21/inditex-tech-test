import { createContext, useState } from "react";
import type { ReactElement } from "react";

export type LoaderContextProps = {
  isLoading: boolean;
  handleIsLoadingChange(isLoading: boolean): void;
};

export const LoaderContext = createContext<LoaderContextProps>({
  isLoading: false,
  handleIsLoadingChange: () => {},
});

type LoaderContextProviderProps = {
  children: ReactElement;
};

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps): ReactElement {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoadingChange = (isLoading: boolean): void => {
    setIsLoading(isLoading);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, handleIsLoadingChange }}>
      {children}
    </LoaderContext.Provider>
  );
}
