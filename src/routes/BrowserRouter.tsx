import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { ReactElement } from "react";
import { ErrorPage, Root } from ".";
import {
  PodcastDetailsContainer,
  PodcastEpisodeDetailsContainer,
  PodcastListContainer,
} from "../components";
import { LoaderContextProvider } from "../context/LoaderContext";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PodcastListContainer />,
      },
      {
        path: "/podcast/:podcastId",
        element: <PodcastDetailsContainer />,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <PodcastEpisodeDetailsContainer />,
      },
    ],
  },
]);

// Create a new instance of the query client
const queryClient = new QueryClient();

/**
 * `BrowserRouter` component.
 * Provides the router configuration and query client to the application.
 * @returns The `BrowserRouter` component.
 */
export function BrowserRouter(): ReactElement {
  return (
    <LoaderContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LoaderContextProvider>
  );
}
