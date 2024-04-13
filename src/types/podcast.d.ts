type Podcast = {
  author: string;
  description: string;
  id: string;
  image: string;
  title: string;
};

type PodcastEpisode = {
  duration: string;
  id: number;
  name: string;
  releaseDate: string;
};

type PodcastDetails = {
  podcast?: Podcast;
  episodes: PodcastEpisode[];
  numberOfEpisodes: number;
};
