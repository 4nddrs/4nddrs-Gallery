import React from 'react';
import { JSX } from 'react/jsx-runtime';

const AstroLink = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white text-base hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black focus-visible:ring-yellow-500/80"
    >
      {props.children}
    </a>
  );
};

export default AstroLink;
