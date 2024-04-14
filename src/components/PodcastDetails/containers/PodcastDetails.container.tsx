import { PodcastDetails } from "../components";
import { useEffect } from "react";
import type { ReactElement } from "react";
import { useGetPodcastDetails } from "../../../api-queries/queries/podcast.query";
import { useLoader } from "../../../hooks/useLoader";
import { useParams } from "react-router-dom";

export function PodcastDetailsContainer(): ReactElement {
  const { podcastId } = useParams();
  const { data, isLoading } = useGetPodcastDetails(podcastId!);
  const { handleIsLoadingChange } = useLoader();

  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [handleIsLoadingChange, isLoading]);

  if (isLoading) {
    return <></>;
  }

  return <PodcastDetails podcastDetails={data} />;
}
