import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import {
  podcastDetailsKey,
  podcastEpisodeDetailsKey,
  podcastsKey,
} from "../keys/podcast.keys";
import {
  getPodcastDetails,
  getPodcastEpisodeDetails,
  getPodcastList,
} from "../api/podcast.api";

/**
 * Custom hook to fetch the list of podcasts.
 * @returns The query result containing the list of podcasts.
 */
export function useGetPodcastList(): UseQueryResult<Podcast[]> {
  return useQuery({
    queryKey: podcastsKey,
    queryFn: getPodcastList,
    staleTime: 86400000, // 24 hours in milliseconds
  });
}

/**
 * Custom hook to fetch the details of a podcast.
 * @param id - The ID of the podcast.
 * @returns The query result containing the details of the podcast.
 */
export function useGetPodcastDetails(
  id: string,
): UseQueryResult<PodcastDetails> {
  return useQuery<PodcastDetails>({
    queryKey: podcastDetailsKey(id),
    queryFn: () => getPodcastDetails(id),
    staleTime: 86400000, // 24 hours in milliseconds
  });
}

/**
 * Custom hook to fetch the details of a podcast episode.
 * @param podcastId - The ID of the podcast.
 * @param episodeId - The ID of the episode.
 * @returns The query result containing the details of the episode.
 */
export function useGetPodcastEpisodeDetails(
  podcastId: string,
  episodeId: string,
): UseQueryResult<PodcastEpisodeDetails> {
  return useQuery<PodcastEpisodeDetails>({
    queryKey: podcastEpisodeDetailsKey(podcastId, episodeId),
    queryFn: () => getPodcastEpisodeDetails(podcastId, episodeId),
    staleTime: 86400000, // 24 hours in milliseconds
  });
}
