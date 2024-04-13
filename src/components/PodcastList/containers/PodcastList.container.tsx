import { useState } from "react";
import type { ReactElement } from "react";
import { PodcastList } from "../components";
import { useGetPodcastList } from "../../../api-queries/queries/podcast.query";

export function PodcastListContainer(): ReactElement {
  const [filter, setFilter] = useState("");
  const { data } = useGetPodcastList();

  const filteredData = data?.filter(
    ({ author, title }) =>
      author.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return <PodcastList podcastList={filteredData} setFilter={setFilter} />;
}
