type Podcast = {
  author: string;
  description: string;
  id: string;
  image: string;
  title: string;
};

type PodcastEpisode = {
  description: string;
  duration: string;
  id: number;
  name: string;
  releaseDate: string;
  url: string;
};

type PodcastDetails = {
  podcast?: Podcast;
  episodes: PodcastEpisode[];
  numberOfEpisodes: number;
};

type PodcastEpisodeDetails = {
  podcast?: Podcast;
  episode?: PodcastEpisode;
};
