import type { ReactElement } from "react";
import { Link, useRouteError } from "react-router-dom";

// Define the shape of the error object
type RouteError = {
  message?: string;
  statusText?: string;
};

/**
 * `ErrorPage` component.
 * Renders an error message and a link to navigate back to the homepage.
 * @returns The `ErrorPage` component.
 */
export function ErrorPage(): ReactElement {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl font-bold">Oops!</h1>
      <p className="mb-5 text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="mb-5 text-lg italic text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        className="text-lg text-blue-500 transition-all hover:text-blue-700"
        to="/"
      >
        Back to homepage
      </Link>
    </div>
  );
}
