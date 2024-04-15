import { render, screen } from "@testing-library/react";
import { PodcastDetailsCard } from "./PodcastDetailsCard";

const mockPodcast = {
  author: "Podcast author",
  description: "Podcast description",
  id: "1",
  image: "podcast-image.jpg",
  title: "Podcast title",
};

describe("PodcastDetailsCard", () => {
  it("should render without errors", () => {
    render(<PodcastDetailsCard podcast={{ ...mockPodcast }} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockPodcast.image);
    expect(screen.getByText(mockPodcast.title)).toBeInTheDocument();
    expect(screen.getByText("by")).toBeInTheDocument();
    expect(screen.getByText(mockPodcast.author)).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText(mockPodcast.description)).toBeInTheDocument();
  });
});
