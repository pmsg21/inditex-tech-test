import { render } from "@testing-library/react";
import { PodcastListContainer } from "./PodcastList.container";
import { PodcastList } from "../components";
import { TestQueryClientProvider } from "../../../test";

jest.mock("../../../api-queries/queries/podcast.query", () => ({
  useGetPodcastList: jest.fn().mockReturnValue(() => ({
    data: {},
    isLoading: false,
  })),
}));

jest.mock("../components", () => ({
  __esModule: true,
  PodcastList: jest.fn(),
}));

describe("PodcastListContainer", () => {
  it("should render without errors", () => {
    render(<PodcastListContainer />, {
      wrapper: TestQueryClientProvider,
    });

    expect(PodcastList).toHaveBeenCalled();
  });
});
