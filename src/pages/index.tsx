import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import { LandingFaq } from 'src/components/LandingBlocks/LandingFaq/LandingFaq';
import { LandingMain } from 'src/components/LandingBlocks/LandingMain/LandingMain';
import { LandingMint } from 'src/components/LandingBlocks/LandingMint/LandingMint';
import { LandingTeam } from 'src/components/LandingBlocks/LandingTeam/LandingTeam';

const Home: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>CyberCrew</title>
        </Head>

        <LandingMain />
        <LandingMint htmlId="mint" />
        <LandingTeam htmlId="team" />
        <LandingFaq htmlId="faq" />
    </React.Fragment>
);

export default Home;
