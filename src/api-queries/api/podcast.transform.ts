import type { AxiosResponse } from "axios";
import { formatTime } from "../../utils/formatTime";

/**
 * Transforms the response from the podcast list API into an array of `Podcast` objects.
 * @param response - The Axios response containing the podcast list data.
 * @returns An array of `Podcast` objects.
 */
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

/**
 * Transforms the response from the podcast details API into a `PodcastDetails` object.
 * @param response - The Axios response containing the podcast details data.
 * @param podcastList - The array of podcasts obtained from the list API.
 * @param podcastId - The ID of the podcast for which details are fetched.
 * @returns The `PodcastDetails` object.
 */
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
    episodes: results
      .map((episode) => ({
        description: episode.description,
        duration: formatTime(episode.trackTimeMillis),
        id: episode.trackId,
        name: episode.trackName,
        releaseDate: episode.releaseDate,
        url: episode.episodeUrl,
      }))
      .filter(({ url }) => url),
    numberOfEpisodes: resultCount,
  };
};

/**
 * Transforms the podcast details into a `PodcastEpisodeDetails` object.
 * @param podcastDetails - The PodcastDetails object.
 * @param episodeId - The ID of the episode.
 * @returns The `PodcastEpisodeDetails` object.
 */
export const transformPodcastEpisodeDetails = (
  podcastDetails: PodcastDetails,
  episodeId: string,
): PodcastEpisodeDetails => ({
  episode: podcastDetails.episodes.find(({ id }) => id === Number(episodeId)),
  podcast: podcastDetails.podcast,
});
