import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

export const AppHead: NextPage = () => {
  return (
    <Head>
      <title>Next.JS, TypeScript & TailwindCSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Next.JS App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
