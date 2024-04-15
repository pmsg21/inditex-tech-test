import { render, screen } from "@testing-library/react";
import { PodcastListItem } from "./PodcastListItem";

const mockProps = {
  author: "Podcast author",
  description: "Podcast description",
  id: "1",
  image: "podcast-image.jpg",
  title: "Podcast title",
};

describe("PodcastListItem", () => {
  it("should render without errors", () => {
    render(<PodcastListItem {...mockProps} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProps.image);
    expect(screen.getByText(mockProps.title.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(`Author: ${mockProps.author}`)).toBeInTheDocument();
  });
});
