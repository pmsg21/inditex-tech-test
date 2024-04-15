import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PodcastList } from "./PodcastList";
import { PodcastListItem } from "./PodcastListItem";

jest.mock("./PodcastListItem", () => ({
  __esModule: true,
  PodcastListItem: jest.fn(),
}));

const mockPodcastList = [
  {
    author: "Podcast author 1",
    description: "Podcast description 1",
    id: "1",
    image: "podcast-image-1.jpg",
    title: "Podcast title 1",
  },
  {
    author: "Podcast author 2",
    description: "Podcast description 2",
    id: "2",
    image: "podcast-image-2.jpg",
    title: "Podcast title 2",
  },
  {
    author: "Podcast author 3",
    description: "Podcast description 3",
    id: "3",
    image: "podcast-image-3.jpg",
    title: "Podcast title 3",
  },
];

describe("PodcastList", () => {
  it("should render without errors", () => {
    render(
      <PodcastList setFilter={jest.fn()} podcastList={[...mockPodcastList]} />,
    );

    expect(screen.getByText(mockPodcastList.length)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Filter podcasts..."),
    ).toBeInTheDocument();
    expect(PodcastListItem).toHaveBeenCalledTimes(mockPodcastList.length);
  });

  it("should call the setFilter function", async () => {
    const mockSetFilter = jest.fn();
    render(
      <PodcastList
        setFilter={mockSetFilter}
        podcastList={[...mockPodcastList]}
      />,
    );

    await userEvent.type(
      screen.getByPlaceholderText("Filter podcasts..."),
      "filter",
    );
    expect(mockSetFilter).toHaveBeenCalled();
  });

  it("should render the correct message podcastList.length === 0", () => {
    render(<PodcastList setFilter={jest.fn()} podcastList={[]} />);

    expect(screen.getByText("No podcast found")).toBeInTheDocument();
  });
});
