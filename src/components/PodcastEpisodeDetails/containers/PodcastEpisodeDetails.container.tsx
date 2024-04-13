import type { ReactElement } from "react";
import { PodcastEpisodeDetails } from "../components";
import { useParams } from "react-router-dom";
import { useGetPodcastEpisodeDetails } from "../../../api-queries/queries/podcast.query";

export function PodcastEpisodeDetailsContainer(): ReactElement {
  const { podcastId, episodeId } = useParams();
  const { data } = useGetPodcastEpisodeDetails(podcastId!, episodeId!);

  return <PodcastEpisodeDetails {...data} />;
}
