import type { AxiosResponse } from "axios";

export const transformPodcastList = (
  response: AxiosResponse<PodcastListResponse>,
): Podcast[] => {
  const {
    data: {
      feed: { entry },
    },
  } = response;

  return entry.map((podcast) => ({
    author: podcast["im:artist"].label,
    id: podcast.id.attributes["im:id"],
    image: podcast["im:image"][podcast["im:image"].length - 1].label,
    title: podcast["im:name"].label,
  }));
};
