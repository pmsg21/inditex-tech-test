import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { podcastsKey } from "../keys/podcast.keys";
import { getPodcastList } from "../api/podcast.api";

export function useGetPodcastList(): UseQueryResult<Podcast[]> {
  return useQuery({
    queryKey: podcastsKey,
    queryFn: getPodcastList,
    staleTime: 86400000, // 24 hours in milliseconds
  });
}
