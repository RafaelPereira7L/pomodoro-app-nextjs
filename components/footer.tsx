import type { NextPage } from 'next';
import React from 'react';

const Footer: NextPage = () => {
  return (
    <nav className="w-full absolute inset-x-0 bottom-0 h-14">
      <div className="bg-gray-200 text-black p-4">
        <div className="flex flex-row justify-center w-sm font-medium ">
          <h1>
            Made with 💜 by{' '}
            <a
              target="_blank"
              href="https://rafael-dev.tech"
              className="hover:text-cyan-400 ease-in duration-150"
              rel="noreferrer"
            >
              rafaeldev
            </a>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
