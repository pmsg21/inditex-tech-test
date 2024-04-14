import type { ReactElement } from "react";
import dayjs from "dayjs";
import { PodcastDetailsCard } from "../../shared";
import { Link } from "react-router-dom";

/**
 * Props for the `PodcastDetails` component.
 */
type PodcastDetailsProps = {
  podcastDetails?: PodcastDetails;
};

/**
 * `PodcastDetails` component.
 * Renders details of a podcast including its episodes.
 * @param podcastDetails Details of the podcast to render.
 * @returns The `PodcastDetails` component.
 */
export function PodcastDetails({
  podcastDetails,
}: PodcastDetailsProps): ReactElement {
  return (
    <div className="mb-6 flex flex-row gap-8 px-8">
      <PodcastDetailsCard podcast={podcastDetails?.podcast} />
      <div className="flex grow flex-col gap-4 pl-32">
        <div className="rounded p-4 shadow-custom transition-shadow hover:shadow-custom-hover">
          <h1 className="text-4xl font-bold">
            Episodes: {podcastDetails?.numberOfEpisodes}
          </h1>
        </div>
        <div className="rounded px-6 py-4 shadow-custom transition-shadow hover:shadow-custom-hover">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b-4 border-b-gray-100">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {podcastDetails?.episodes.map((episode) => (
                <tr
                  className="border-b-2 border-b-gray-100 transition-colors last:border-b-0 odd:bg-stone-50 hover:bg-stone-100"
                  key={`episode-${episode.id}`}
                >
                  <td className="p-3">
                    <Link
                      className="cursor-pointer text-blue-700 transition-colors hover:text-blue-400"
                      to={`/podcast/${podcastDetails.podcast?.id}/episode/${episode.id}`}
                    >
                      {episode.name}
                    </Link>
                  </td>
                  <td className="p-3">
                    {dayjs(episode.releaseDate).format("D/M/YYYY")}
                  </td>
                  <td className="p-3">{episode.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
