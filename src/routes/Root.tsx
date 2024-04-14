import type { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import loader from "../assets/loader.gif";
import { useLoader } from "../hooks/useLoader";

/**
 * `Root` component of the application.
 * Renders the navigation bar, loader (if isLoading is true), and child components.
 * @returns The `Root` component.
 */
export function Root(): ReactElement {
  const { isLoading } = useLoader();

  return (
    <>
      <nav className="mb-6 flex h-20 justify-between border-b-2 border-b-gray-100 p-4">
        <h1 className="text-3xl text-blue-500 transition-all hover:text-blue-700">
          <Link to="/">Podcaster</Link>
        </h1>
        {isLoading && <img src={loader} alt="loader" className="w-12" />}
      </nav>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
}
