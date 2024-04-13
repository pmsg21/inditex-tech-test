/** A simple key for the podcast list query data */
export const podcastsKey = ["podcasts"];

/** A simple key for the podcast details query data */
export const podcastDetailsKey = (id: string): string[] => [...podcastsKey, id];

/** A simple key for the podcast episode details query data */
export const podcastEpisodeDetailsKey = (
  podcastId: string,
  episodeId: string,
): string[] => [...podcastsKey, podcastId, episodeId];
