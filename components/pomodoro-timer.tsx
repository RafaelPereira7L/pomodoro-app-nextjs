import React, { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useInterval } from '../utils/hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  pomodoroCycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [counter, setCounter] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [start] = useSound('/sounds/start.mp3', { volume: 0.25 });
  const [finish] = useSound('/sounds/finish.mp3', { volume: 0.25 });
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.pomodoroCycles - 1).fill(true),
  );
  const [cyclesQtd, setCyclesQtd] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [pomodoroQtd, setPomodoroQtd] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setWorkingTime(workingTime + 1);
    },
    counter ? 1000 : null,
  );

  const handleStart = useCallback(() => {
    setCounter(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    start();
  }, [
    setCounter,
    setWorking,
    setResting,
    setMainTime,
    start,
    props.pomodoroTime,
  ]);

  const handleReset = useCallback(
    (long: boolean) => {
      setCounter(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }
      finish();
    },
    [
      setCounter,
      setWorking,
      setResting,
      finish,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      handleReset(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      handleReset(true);
      setCyclesQtdManager(new Array(props.pomodoroCycles - 1).fill(true));
      setCyclesQtd(cyclesQtd + 1);
    }
    if (working) setPomodoroQtd(pomodoroQtd + 1);
    if (resting) handleStart();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    pomodoroQtd,
    handleStart,
    handleReset,
    props.pomodoroCycles,
    cyclesQtd,
  ]);

  return (
    <div className="pomodoro-timer">
      <h1 className="text-2xl">
        Você está: {working ? 'Trabalhando' : 'Descansando'}
      </h1>
      <Timer timer={mainTime}></Timer>
      <div className="controls flex align-middle justify-evenly">
        <Button
          className={`${
            working
              ? 'bg-red-500 text-white focus:ring-red-400'
              : 'bg-cyan-500 focus:ring-indigo-300'
          } text-lg px-5 py-2 my-5 mx-auto rounded-lg shadow-sm focus:outline-none focus:ring ease-in-out duration-150 font-medium`}
          text="Iniciar"
          onClick={() => handleStart()}
        ></Button>

        <Button
          className={`${
            working
              ? 'bg-red-500 text-white focus:ring-red-400'
              : 'bg-cyan-500 focus:ring-indigo-300'
          } text-lg px-5 py-2 my-5 mx-1 rounded-lg shadow-sm focus:outline-none focus:ring ease-in-out duration-150 font-medium`}
          text="Descansar"
          onClick={() => handleReset(false)}
        ></Button>

        <Button
          className={`
          ${
            working
              ? 'bg-red-500 text-white focus:ring-red-400'
              : 'bg-cyan-500 focus:ring-indigo-300'
          }
          ${!working && !resting ? 'hidden' : ''}

          text-lg px-5 py-2 my-5 mx-auto rounded-lg shadow-sm focus:outline-none focus:ring ease-in-out duration-150 font-medium`}
          text={counter ? 'Pausar' : 'Continuar'}
          onClick={() => setCounter(!counter)}
        ></Button>
      </div>

      <div className="infos">
        <p>Quantidade de Pomodoros: {pomodoroQtd}</p>
        <p>Tempo trabalhado: {secondsToTime(workingTime)}</p>
        <p>Ciclos concluídos: {cyclesQtd}</p>
      </div>
    </div>
  );
}
