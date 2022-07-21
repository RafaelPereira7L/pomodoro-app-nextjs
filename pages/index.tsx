import type { NextPage } from 'next';
import React from 'react';
import { AppHead } from '../components/head';
import { PomodoroTimer } from '../components/pomodoro-timer';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <PomodoroTimer defaultPomodoroTime={1500} />
    </>
  );
};

export default Home;
