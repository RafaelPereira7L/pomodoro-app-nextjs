import React from 'react';
import { secondsToMinutes } from '../utils/seconds-to-minutes';

interface Props {
  timer: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer text-4xl">{secondsToMinutes(props.timer)}</div>;
}
