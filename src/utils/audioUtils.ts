export const calculateProgress = (currentTime: number, duration: number): number => {
  return (currentTime / duration) * 100;
};

export const calculateTimeFromClick = (
  e: React.MouseEvent<HTMLDivElement>,
  duration: number
): number => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = x / rect.width;
  return Math.max(0, Math.min(duration, duration * percentage));
};

export const calculateVolumeFromClick = (e: React.MouseEvent<HTMLDivElement>): number => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = x / rect.width;
  return Math.max(0, Math.min(1, percentage));
};