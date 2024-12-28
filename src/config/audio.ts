// Audio files should be placed in the public/audio directory
// Format: /audio/{book}/{chapter}/{version}-{narrator}.mp3
// Example: /audio/Genesis/1/KJV-default.mp3

export const SUPPORTED_VERSIONS = ['KJV', 'NIV', 'ESV'] as const;
export const SUPPORTED_NARRATORS = ['Default', 'Dramatic', 'Female'] as const;

export const getAudioUrl = (
  book: string,
  chapter: number,
  version: string,
  narrator: string
) => {
  return `/audio/${book}/${chapter}/${version}-${narrator.toLowerCase()}.mp3`;
};