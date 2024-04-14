import { PodcastDetails } from "../components";
import { useEffect } from "react";
import type { ReactElement } from "react";
import { useGetPodcastDetails } from "../../../api-queries/queries/podcast.query";
import { useLoader } from "../../../hooks/useLoader";
import { useParams } from "react-router-dom";

/**
 * `PodcastDetailsContainer` component.
 * Container component for fetching and displaying podcast details.
 * @returns The `PodcastDetailsContainer` component.
 */
export function PodcastDetailsContainer(): ReactElement {
  const { podcastId } = useParams();
  const { data, isLoading } = useGetPodcastDetails(podcastId!);
  const { handleIsLoadingChange } = useLoader();

  // Update loading state when loading status changes
  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [handleIsLoadingChange, isLoading]);

  // Render loading indicator if data is still loading
  if (isLoading) {
    return <></>;
  }

  return <PodcastDetails podcastDetails={data} />;
}
