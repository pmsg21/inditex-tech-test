import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { PodcastList } from "../components";
import { useGetPodcastList } from "../../../api-queries/queries/podcast.query";
import { useLoader } from "../../../hooks/useLoader";

export function PodcastListContainer(): ReactElement {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetPodcastList();
  const { handleIsLoadingChange } = useLoader();

  const filteredData = data?.filter(
    ({ author, title }) =>
      author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  useEffect(() => {
    handleIsLoadingChange(isLoading);
  }, [handleIsLoadingChange, isLoading]);

  if (isLoading) {
    return <></>;
  }

  return <PodcastList podcastList={filteredData} setFilter={setFilter} />;
}
