import { render } from "@testing-library/react";
import { PodcastDetailsContainer } from "./PodcastDetails.container";
import { PodcastDetails } from "../components";
import { TestQueryClientProvider } from "../../../test";

jest.mock("../../../api-queries/queries/podcast.query", () => ({
  useGetPodcastDetails: jest.fn().mockReturnValue(() => ({
    data: {},
    isLoading: false,
  })),
}));

jest.mock("../components", () => ({
  __esModule: true,
  PodcastDetails: jest.fn(),
}));

describe("PodcastDetailsContainer", () => {
  it("should render without errors", () => {
    render(<PodcastDetailsContainer />, {
      wrapper: TestQueryClientProvider,
    });

    expect(PodcastDetails).toHaveBeenCalled();
  });
});
