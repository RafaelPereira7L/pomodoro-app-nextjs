import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/footer';
import { AppHead } from '../components/head';
import { PomodoroTimer } from '../components/pomodoro-timer';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <main className="max-w-md my-auto mx-auto flex flex-col justify-center items-center h-screen">
        <div className="container bg-gray-200 text-black text-center my-5 mx-2 max-w-sm p-10 rounded-lg shadow-lg">
          <PomodoroTimer
            pomodoroTime={1500} // 25 minutos
            shortRestTime={300} // 5 minutos
            longRestTime={900} // 15 minutos
            pomodoroCycles={4} // 4 ciclos
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
