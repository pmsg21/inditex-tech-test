import { PodcastEpisodeDetails } from "../components";
import { useEffect } from "react";
import type { ReactElement } from "react";
import { useGetPodcastEpisodeDetails } from "../../../api-queries/queries/podcast.query";
import { useLoader } from "../../../hooks/useLoader";
import { useParams } from "react-router-dom";

/**
 * `PodcastEpisodeDetailsContainer` component.
 * Retrieves and renders details of a podcast episode.
 * @returns The `PodcastEpisodeDetailsContainer` component.
 */
export function PodcastEpisodeDetailsContainer(): ReactElement {
  const { podcastId, episodeId } = useParams();
  const { data, isLoading } = useGetPodcastEpisodeDetails(
    podcastId!,
    episodeId!,
  );
  const { handleIsLoadingChange } = useLoader();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [handleIsLoadingChange, isLoading]);

  if (isLoading) {
    return <></>;
  }

  return <PodcastEpisodeDetails {...data} />;
}
