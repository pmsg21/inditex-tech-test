import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { PodcastList } from "../components";
import { useGetPodcastList } from "../../../api-queries/queries/podcast.query";
import { useLoader } from "../../../hooks/useLoader";

/**
 * `PodcastListContainer` component.
 * Manages the state and logic for fetching and filtering the podcast list.
 * @returns The `PodcastListContainer` component.
 */
export function PodcastListContainer(): ReactElement {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetPodcastList();
  const { handleIsLoadingChange } = useLoader();

  // Filter the data based on the filter value
  const filteredData = data?.filter(
    ({ author, title }) =>
      author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  // Update loader context when loading state changes
  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [handleIsLoadingChange, isLoading]);

  // Render loading indicator if data is still loading
  if (isLoading) {
    return <></>;
  }

  return <PodcastList podcastList={filteredData} setFilter={setFilter} />;
}
