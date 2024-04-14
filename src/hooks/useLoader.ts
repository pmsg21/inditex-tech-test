import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";
import type { LoaderContextProps } from "../context/LoaderContext";

export function useLoader(): LoaderContextProps {
  return useContext(LoaderContext);
}
