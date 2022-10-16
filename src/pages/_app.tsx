import '../styles/globals.css';
import '../styles/motion.css';
import type { AppProps } from 'next/app';
import React from 'react';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);
/* eslint-enable react/jsx-props-no-spreading */

export default MyApp;
