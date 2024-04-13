import type { ReactElement } from "react";
import { PodcastDetails } from "../components";
import { useParams } from "react-router-dom";
import { useGetPodcastDetails } from "../../../api-queries/queries/podcast.query";

export function PodcastDetailsContainer(): ReactElement {
  const { podcastId } = useParams();
  const { data } = useGetPodcastDetails(podcastId!);

  return <PodcastDetails podcastDetails={data} />;
}
