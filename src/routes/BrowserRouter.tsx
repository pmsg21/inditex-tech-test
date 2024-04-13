import { ErrorPage, Root } from '.';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  PodcastDetailsContainer,
  PodcastEpisodeDetailsContainer,
  PodcastListContainer,
} from '../components';
import type { ReactElement } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <PodcastListContainer />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetailsContainer />,
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <PodcastEpisodeDetailsContainer />,
      },
    ],
  },
]);

export function BrowserRouter(): ReactElement {
  return <RouterProvider router={router} />;
}
