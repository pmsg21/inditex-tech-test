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
};

type PodcastListResponse = {
  feed: {
    entry: EntryDataType[];
  };
};
