import type { AxiosResponse } from "axios";
import { formatTime } from "../../utils/formatTime";

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
    description: podcast.summary.label,
    id: podcast.id.attributes["im:id"],
    image: podcast["im:image"][podcast["im:image"].length - 1].label,
    title: podcast["im:name"].label,
  }));
};

export const transformPodcastDetails = (
  response: AxiosResponse<PodcastDetailsResponse>,
  podcastList: Podcast[],
  podcastId: string,
): PodcastDetails => {
  const {
    data: { resultCount, results },
  } = response;

  const podcast = podcastList.find(({ id }) => id === podcastId);

  return {
    podcast,
    episodes: results.map((episode) => ({
      duration: formatTime(episode.trackTimeMillis),
      id: episode.trackId,
      name: episode.trackName,
      releaseDate: episode.releaseDate,
    })),
    numberOfEpisodes: resultCount,
  };
};
