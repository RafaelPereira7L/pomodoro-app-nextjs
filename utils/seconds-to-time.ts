import { leftZero } from './left-zero';

export function secondsToTime(seconds: number): string {
  const hours = leftZero(seconds / 3600);
  const mins = leftZero((seconds / 60) % 60);
  const secs = leftZero((seconds % 60) % 60);

  return `${hours}:${mins}:${secs}`;
}
