import React from 'react';

import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './styles.module.css';
import clsx from 'clsx';

export default function Logo(props) {
  const { isDarkTheme } = useThemeContext();

  return (
    <svg
      width="141"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx(styles.logo, {
        [props.className]: Boolean(props.className),
      })}
    >
      <path
        d="M3.38 14c0-5.88 4.8-10.64 10.72-10.64 2.38 0 4.58.77 6.36 2.08a4.03 4.03 0 012.56-2.28A14.1 14.1 0 0014.1 0C6.3 0 0 6.27 0 14s6.31 14 14.1 14A14.05 14.05 0 0027.4 9.38a4.03 4.03 0 01-3.02 1.61A10.68 10.68 0 0114.1 24.64 10.68 10.68 0 013.38 14z"
        fill="#3880FF"
      />
      <path
        d="M27.9 11.16c-.12-.6-.29-1.2-.5-1.78a4.03 4.03 0 01-3.02 1.61c.2.68.33 1.38.4 2.1a4.4 4.4 0 003.13-1.93zM14.1 20.13c3.4 0 6.17-2.75 6.17-6.13a6.15 6.15 0 00-6.17-6.12A6.15 6.15 0 007.93 14a6.16 6.16 0 006.17 6.13zM23.35 8.75c1.7 0 3.08-1.37 3.08-3.06 0-1.7-1.38-3.07-3.08-3.07a3.07 3.07 0 00-3.09 3.07c0 1.69 1.39 3.06 3.09 3.06z"
        fill="#3880FF"
      />
      <path
        d="M36 21.75h2.81v-6.57h6.71v-2.53h-6.7V8.87H45.92V6.3H36V21.75zM52.65 10.66l-.36-.02c-1.87 0-2.7.88-3.1 1.53v-1.42h-2.76v11h2.98v-5.48c0-2.02.9-2.88 2.65-2.88.27 0 .59.06.59.06v-2.79zM61.25 10.75v1.34c-.7-1-1.93-1.6-3.49-1.6-3.19 0-5.06 2.57-5.06 5.76S54.57 22 57.76 22c1.56 0 2.8-.59 3.49-1.6v1.35H64v-11h-2.75zm-.15 5.5c0 1.78-1.05 3.13-2.7 3.13-1.67 0-2.71-1.35-2.71-3.13 0-1.79 1.04-3.13 2.7-3.13 1.66 0 2.71 1.34 2.71 3.13zM75.31 15.5c0-1.54.74-2.44 2.14-2.44 1.33 0 1.77.94 1.77 2.16v6.53h2.98v-6.87c0-2.56-1.34-4.39-3.99-4.39-1.58 0-2.69.49-3.65 1.56-.63-.97-1.7-1.56-3.2-1.56-1.57 0-2.66.65-3.17 1.6v-1.34h-2.75v11h2.98v-6.32c0-1.47.76-2.37 2.15-2.37 1.32 0 1.76.94 1.76 2.16v6.53h2.98v-6.26zM94.23 17.1s.04-.4.04-.87c0-3.26-2.2-5.74-5.46-5.74-3.25 0-5.52 2.48-5.52 5.74 0 3.38 2.29 5.77 5.54 5.77a5.27 5.27 0 005.2-3.76h-3c-.35.8-1.21 1.2-2.11 1.2-1.5 0-2.46-.82-2.67-2.33h7.98zm-5.44-4.21c1.39 0 2.29.84 2.5 2.08h-5c.25-1.26 1.13-2.08 2.5-2.08zM104.88 21.75h2.8l3.84-11h-3.02l-2.23 7.28-2.29-7.28h-2.69l-2.27 7.24-2.2-7.24h-3.09l3.85 11h2.79l2.25-6.8h.04l2.22 6.8zM116.93 22a5.59 5.59 0 005.77-5.75 5.59 5.59 0 00-5.77-5.76 5.59 5.59 0 00-5.77 5.76 5.59 5.59 0 005.77 5.75zm-2.8-5.75c0-1.98 1.23-3.13 2.8-3.13 1.57 0 2.8 1.15 2.8 3.13 0 1.97-1.23 3.13-2.8 3.13-1.57 0-2.8-1.16-2.8-3.13zM130.12 10.66l-.36-.02c-1.86 0-2.7.88-3.1 1.53v-1.42h-2.75v11h2.98v-5.48c0-2.02.9-2.88 2.64-2.88.28 0 .6.06.6.06v-2.79zM134.1 6h-3.16v15.75h3.15v-5.73l.04-.05 3.17 5.78h3.68l-3.86-6.05 3.63-4.62h-3.5l-3.12 4.43-.04-.04V6z"
        fill={isDarkTheme ? '#fff' : '#03060B'}
      />
    </svg>
  );
}
