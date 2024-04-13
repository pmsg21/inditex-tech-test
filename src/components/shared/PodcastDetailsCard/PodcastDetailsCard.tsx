import type { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

type PodcastDetailsCardProps = {
  podcast?: Podcast;
};

export function PodcastDetailsCard({
  podcast,
}: PodcastDetailsCardProps): ReactElement {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/podcast/${podcast?.id}`);
  };

  return (
    <div className="h-full w-96 rounded p-4 shadow-custom transition-shadow hover:shadow-custom-hover">
      <img
        alt={`${podcast?.title} image`}
        className="mx-auto w-60 cursor-pointer rounded-lg transition-shadow"
        onClick={handleClick}
        src={podcast?.image}
      />
      <div className="mt-5 border-y-2 border-y-gray-100 px-2 py-4">
        <Link
          className="cursor-pointer text-lg font-semibold transition-colors hover:text-gray-600"
          to={`/podcast/${podcast?.id}`}
        >
          {podcast?.title}
        </Link>
        <p className="italic">
          by{" "}
          <Link
            to={`/podcast/${podcast?.id}`}
            className="cursor-pointer transition-colors hover:text-gray-600"
          >
            {podcast?.author}
          </Link>
        </p>
      </div>
      <p className="mt-4 font-bold text-stone-700">Description:</p>
      <p className="text-wrap italic">{podcast?.description}</p>
    </div>
  );
}
