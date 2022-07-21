import { leftZero } from './left-zero';

export function secondsToMinutes(seconds: number): string {
  const mins = leftZero((seconds / 60) % 60);
  const secs = leftZero((seconds % 60) % 60);

  return `${mins}:${secs}`;
}
