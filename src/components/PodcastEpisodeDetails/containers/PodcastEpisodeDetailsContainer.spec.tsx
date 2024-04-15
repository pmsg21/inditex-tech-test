import { render } from "@testing-library/react";
import { PodcastEpisodeDetailsContainer } from "./PodcastEpisodeDetails.container";
import { PodcastEpisodeDetails } from "../components";
import { TestQueryClientProvider } from "../../../test";

jest.mock("../../../api-queries/queries/podcast.query", () => ({
  useGetPodcastEpisodeDetails: jest.fn().mockReturnValue(() => ({
    data: {},
    isLoading: false,
  })),
}));

jest.mock("../components", () => ({
  __esModule: true,
  PodcastEpisodeDetails: jest.fn(),
}));

describe("PodcastEpisodeDetailsContainer", () => {
  it("should render without errors", () => {
    render(<PodcastEpisodeDetailsContainer />, {
      wrapper: TestQueryClientProvider,
    });

    expect(PodcastEpisodeDetails).toHaveBeenCalled();
  });
});
