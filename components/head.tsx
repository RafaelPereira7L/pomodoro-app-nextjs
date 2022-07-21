import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

export const AppHead: NextPage = () => {
  return (
    <Head>
      <title>Pomodoro APP - Rafael DEV</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Next.JS, TypeScript & TailwindCSS" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};
