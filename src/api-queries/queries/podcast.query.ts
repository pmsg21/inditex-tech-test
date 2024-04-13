import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { podcastDetailsKey, podcastsKey } from "../keys/podcast.keys";
import { getPodcastDetails, getPodcastList } from "../api/podcast.api";

export function useGetPodcastList(): UseQueryResult<Podcast[]> {
  return useQuery({
    queryKey: podcastsKey,
    queryFn: getPodcastList,
    staleTime: 86400000, // 24 hours in milliseconds
  });
}

export function useGetPodcastDetails(
  id: string,
): UseQueryResult<PodcastDetails> {
  return useQuery<PodcastDetails>({
    queryKey: podcastDetailsKey(id),
    queryFn: () => getPodcastDetails(id),
    staleTime: 86400000, // 24 hours in milliseconds
  });
}
