import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

/**
 * `PodcastListItem` component.
 * Renders a single item in the podcast list.
 * @param author - Author of the podcast.
 * @param id - ID of the podcast.
 * @param image - URL of the podcast image.
 * @param title - Title of the podcast.
 * @returns The `PodcastListItem` component.
 */
export function PodcastListItem({
  author,
  id,
  image,
  title,
}: Podcast): ReactElement {
  const navigate = useNavigate();

  // Click handler to navigate to the podcast details page
  const handleClick = (): void => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div
      className="relative mb-20 flex h-52 flex-col p-5 shadow-custom transition-shadow hover:cursor-pointer hover:shadow-custom-hover"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={`${title} image`}
        className="absolute top-[-4rem] w-40 self-center rounded-full"
      />
      <h1 className="mt-24 truncate text-center text-lg font-semibold">
        {title.toUpperCase()}
      </h1>
      <p className="truncate text-center text-gray-500">Author: {author}</p>
    </div>
  );
}
