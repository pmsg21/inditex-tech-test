import type { AxiosResponse } from "axios";
import axios from "axios";
import { transformPodcastList } from "./podcast.transform";

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
