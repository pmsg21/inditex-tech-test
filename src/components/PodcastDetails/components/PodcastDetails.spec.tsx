import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { PodcastDetails } from "./PodcastDetails";
import { PodcastDetailsCard } from "../../shared";

jest.mock("../../shared", () => ({
  __esModule: true,
  PodcastDetailsCard: jest.fn(),
}));

const mockPodcastEpisodes = [
  {
    description: "Episode description 1",
    duration: "45:00",
    id: 1,
    name: "Episode name 1",
    releaseDate: "2024-04-13T07:00:00Z",
    url: "test-episode-1.mp3",
  },
  {
    description: "Episode description 2",
    duration: "30:00",
    id: 2,
    name: "Episode name 2",
    releaseDate: "2024-04-10T07:00:00Z",
    url: "test-episode-2.mp3",
  },
];

const mockPodcastDetails = {
  author: "Podcast author",
  description: "Podcast description",
  id: "1",
  image: "test-image.jpg",
  title: "Podcast title",
};

describe("PodcastDetails", () => {
  it("should render without errors", () => {
    render(<PodcastDetails />);

    expect(screen.getByText("Episodes:")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(PodcastDetailsCard).toHaveBeenCalled();
  });

  it("should render without errors with data", () => {
    render(
      <PodcastDetails
        podcastDetails={{
          episodes: [...mockPodcastEpisodes],
          numberOfEpisodes: 2,
          podcast: { ...mockPodcastDetails },
        }}
      />,
    );

    expect(screen.getByText("Episodes: 2")).toBeInTheDocument();

    mockPodcastEpisodes.map(({ duration, name, releaseDate }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(dayjs(releaseDate).format("D/M/YYYY")),
      ).toBeInTheDocument();
      expect(screen.getByText(duration)).toBeInTheDocument();
    });
  });
});
