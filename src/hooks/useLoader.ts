import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import type { LoaderContextProps } from "../context/LoaderContext";

/**
 * Custom hook to access loader context.
 * @returns The loader context.
 */
export function useLoader(): LoaderContextProps {
  return useContext(LoaderContext);
}
