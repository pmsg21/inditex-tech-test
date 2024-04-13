import type { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

export function Root(): ReactElement {
  return (
    <>
      <nav className="flex border-b-2 border-b-gray-100 p-3">
        <h1 className="text-3xl text-blue-500 transition-all hover:text-blue-700">
          <Link to="/">Podcaster</Link>
        </h1>
      </nav>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
}
