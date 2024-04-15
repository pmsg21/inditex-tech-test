import { render, screen } from "@testing-library/react";
import { PodcastEpisodeDetails } from "./PodcastEpisodeDetails";
import { PodcastDetailsCard } from "../../shared";

jest.mock("../../shared", () => ({
  __esModule: true,
  PodcastDetailsCard: jest.fn(),
}));

const mockPodcast = {
  author: "Podcast author",
  description: "Podcast description",
  id: "1",
  image: "podcast-image.jpg",
  title: "Podcast title",
};

const mockEpisode = {
  description: "Episode description 1",
  duration: "45:00",
  id: 1,
  name: "Episode name 1",
  releaseDate: "2024-04-13T07:00:00Z",
  url: "test-episode-1.mp3",
};

describe("PodcastEpisodeDetails", () => {
  it("should render without errors", () => {
    render(
      <PodcastEpisodeDetails
        podcast={{ ...mockPodcast }}
        episode={{ ...mockEpisode }}
      />,
    );

    expect(screen.getByText(mockEpisode.name)).toBeInTheDocument();
    expect(screen.getByText(mockEpisode.description)).toBeInTheDocument();
    expect(PodcastDetailsCard).toHaveBeenCalled();
  });
});
