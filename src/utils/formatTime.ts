/**
 * Formats milliseconds into a string representation of time in the format "HH:MM:SS".
 * @param milliseconds The number of milliseconds to format.
 * @returns A string representing the formatted time.
 */
export function formatTime(milliseconds: number): string {
  // Convert milliseconds to seconds
  const totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // Format hours, minutes, and seconds
  const formattedHours = hours > 0 ? `${hours}:` : "";
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
}
