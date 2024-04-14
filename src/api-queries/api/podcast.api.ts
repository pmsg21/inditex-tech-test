import type { AxiosResponse } from "axios";
import axios from "axios";
import {
  transformPodcastDetails,
  transformPodcastEpisodeDetails,
  transformPodcastList,
} from "./podcast.transform";

/**
 * Fetches the list of podcasts.
 * @returns A promise that resolves to an array of podcasts.
 */
export async function getPodcastList(): Promise<Podcast[]> {
  try {
    const response: AxiosResponse<PodcastListResponse> = await axios.get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    );

    return transformPodcastList(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Fetches the details of a specific podcast.
 * @param id - The ID of the podcast.
 * @returns A promise that resolves to the details of the podcast.
 */
export async function getPodcastDetails(id: string): Promise<PodcastDetails> {
  try {
    const response: AxiosResponse<PodcastDetailsResponse> = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
    );

    const podcastList = await getPodcastList();

    return transformPodcastDetails(response, podcastList, id);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Fetches the details of a specific podcast episode.
 * @param podcastId - The ID of the podcast.
 * @param episodeId - The ID of the episode.
 * @returns A promise that resolves to the details of the podcast episode.
 */
export async function getPodcastEpisodeDetails(
  podcastId: string,
  episodeId: string,
): Promise<PodcastEpisodeDetails> {
  try {
    const response: AxiosResponse<PodcastDetailsResponse> = await axios.get(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    );

    const podcastList = await getPodcastList();
    const podcastDetails = transformPodcastDetails(
      response,
      podcastList,
      podcastId,
    );

    return transformPodcastEpisodeDetails(podcastDetails, episodeId);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
