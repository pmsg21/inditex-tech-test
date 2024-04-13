import type { AxiosResponse } from "axios";
import axios from "axios";
import {
  transformPodcastDetails,
  transformPodcastEpisodeDetails,
  transformPodcastList,
} from "./podcast.transform";

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
