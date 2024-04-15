import {
  transformPodcastDetails,
  transformPodcastEpisodeDetails,
  transformPodcastList,
} from "./podcast.transform";
import { formatTime } from "../../utils/formatTime";
import type { AxiosResponse } from "axios";

describe("podcast.transform", () => {
  describe("transformPodcastList", () => {
    it("transforms the podcast list response correctly", () => {
      const response = {
        data: {
          feed: {
            entry: [
              {
                "im:artist": { label: "Author" },
                summary: { label: "Description" },
                id: { attributes: { "im:id": "1" } },
                "im:image": [{ label: "Image URL" }],
                "im:name": { label: "Title" },
              },
            ],
          },
        },
      };

      const expected = [
        {
          author: "Author",
          description: "Description",
          id: "1",
          image: "Image URL",
          title: "Title",
        },
      ];

      const result = transformPodcastList(
        response as AxiosResponse<PodcastListResponse>,
      );
      expect(result).toEqual(expected);
    });
  });

  describe("transformPodcastDetails", () => {
    it("transforms the podcast details response correctly", () => {
      const response = {
        data: {
          resultCount: 1,
          results: [
            {
              description: "Episode description",
              trackTimeMillis: 60000,
              trackId: "1",
              trackName: "Episode name",
              releaseDate: "2022-04-01T00:00:00Z",
              episodeUrl: "http://example.com",
            },
          ],
        },
      };

      const podcastList = [
        {
          id: "1",
          title: "Podcast Title",
          author: "Podcast Author",
          description: "Podcast Description",
          image: "Podcast Image URL",
        },
      ];

      const expected = {
        podcast: podcastList[0],
        episodes: [
          {
            description: "Episode description",
            duration: formatTime(60000),
            id: "1",
            name: "Episode name",
            releaseDate: "2022-04-01T00:00:00Z",
            url: "http://example.com",
          },
        ],
        numberOfEpisodes: 1,
      };

      const result = transformPodcastDetails(
        response as unknown as AxiosResponse<PodcastDetailsResponse>,
        podcastList,
        "1",
      );
      expect(result).toEqual(expected);
    });
  });

  describe("transformPodcastEpisodeDetails", () => {
    it("transforms the podcast episode details correctly", () => {
      const podcastDetails = {
        podcast: {
          id: "1",
          title: "Podcast Title",
          author: "Podcast Author",
          description: "Podcast Description",
          image: "Podcast Image URL",
        },
        episodes: [
          {
            description: "Episode description",
            duration: "00:01:00",
            id: 1,
            name: "Episode name",
            releaseDate: "2022-04-01T00:00:00Z",
            url: "http://example.com",
          },
        ],
        numberOfEpisodes: 1,
      };

      const expected = {
        episode: {
          description: "Episode description",
          duration: "00:01:00",
          id: 1,
          name: "Episode name",
          releaseDate: "2022-04-01T00:00:00Z",
          url: "http://example.com",
        },
        podcast: {
          id: "1",
          title: "Podcast Title",
          author: "Podcast Author",
          description: "Podcast Description",
          image: "Podcast Image URL",
        },
      };

      const result = transformPodcastEpisodeDetails(podcastDetails, "1");
      expect(result).toEqual(expected);
    });
  });
});
