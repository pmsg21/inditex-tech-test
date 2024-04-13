type ImageDataType = {
  label: string;
};

type EntryDataType = {
  id: {
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
  };
  "im:image": ImageDataType[];
  "im:name": {
    label: string;
  };
  summary: {
    label: string;
  };
};

type PodcastListResponse = {
  feed: {
    entry: EntryDataType[];
  };
};

type ResultsDataType = {
  description: string;
  episodeUrl: string;
  releaseDate: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
};

type PodcastDetailsResponse = {
  resultCount: number;
  results: ResultsDataType[];
};
