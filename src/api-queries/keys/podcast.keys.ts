/** A simple key for the podcast list query data */
export const podcastsKey = ["podcasts"];

/** A simple key for the podcast details query data */
export const podcastDetailsKey = (id: string): string[] => [...podcastsKey, id];
