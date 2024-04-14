import type { ReactElement } from "react";
import { PodcastDetailsCard } from "../../shared";

/**
 * `PodcastEpisodeDetails` component.
 * Renders details of a podcast episode, including name, description, and audio player.
 * @param {PodcastEpisodeDetailsProps} props - The props for the `PodcastEpisodeDetails` component.
 * @returns The `PodcastEpisodeDetails` component.
 */
export function PodcastEpisodeDetails({
  episode,
  podcast,
}: PodcastEpisodeDetails): ReactElement {
  return (
    <div className="mb-6 flex flex-row gap-8 px-8">
      <PodcastDetailsCard podcast={podcast} />
      <div className="ml-32 h-full w-full rounded p-4 shadow-custom transition-shadow hover:shadow-custom-hover">
        <h1 className="mb-4 text-4xl font-bold">{episode?.name}</h1>
        <p className="mb-4 border-b-2 border-b-gray-100 pb-4 italic">
          {episode?.description}
        </p>
        <audio
          controls
          src={episode?.url}
          crossOrigin="anonymous"
          className="w-full"
        >
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
}
