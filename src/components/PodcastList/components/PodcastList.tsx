import type { ReactElement } from "react";
import { PodcastListItem } from "./PodcastListItem";

type PodcastListProps = {
  podcastList?: Podcast[];
  setFilter(filter: () => string): void;
};

export function PodcastList({
  podcastList,
  setFilter,
}: PodcastListProps): ReactElement {
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-row items-center justify-end gap-3">
        <span className="flex h-1/2 items-center rounded-lg bg-[#2c79be] px-2 py-0 text-2xl font-bold text-white">
          {podcastList?.length}
        </span>
        <input
          className="rounded border-2 border-gray-100 p-2 transition-colors focus:border-gray-300 focus:outline-none"
          onChange={(e) => setFilter(() => e.target.value)}
          placeholder="Filter podcasts..."
          type="text"
        />
      </div>
      {podcastList?.length ? (
        <div className="mt-24 grid grid-cols-4 justify-between gap-8">
          {podcastList?.map((podcast) => (
            <PodcastListItem key={`podcast-${podcast.id}`} {...podcast} />
          ))}
        </div>
      ) : (
        <h1 className="mt-20 text-center text-4xl italic text-gray-500">
          No podcast found
        </h1>
      )}
    </div>
  );
}
