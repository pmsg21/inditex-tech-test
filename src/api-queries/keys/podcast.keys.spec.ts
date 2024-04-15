import {
  podcastDetailsKey,
  podcastEpisodeDetailsKey,
  podcastsKey,
} from "./podcast.keys";

describe("Podcast query keys", () => {
  it("should generate correct key for podcasts", () => {
    expect(podcastsKey).toEqual(["podcasts"]);
  });

  it("should generate correct key for podcast details", () => {
    const podcastId = "123";
    expect(podcastDetailsKey(podcastId)).toEqual(["podcasts", podcastId]);
  });

  it("should generate correct key for podcast episode details", () => {
    const podcastId = "123";
    const episodeId = "456";
    expect(podcastEpisodeDetailsKey(podcastId, episodeId)).toEqual([
      "podcasts",
      podcastId,
      episodeId,
    ]);
  });
});
