import React from 'react';
import Accordeon from 'src/components/Accordeon/Accordeon';
import { ColumnFullHeightBlock } from 'src/components/PageLayout/PageLayout';
import { Typography } from 'src/components/Typography/Typography';
import { BlockProps } from '../types';
import styles from './LandingFaq.module.css';

export const LandingFaq: React.FC<BlockProps> = ({ htmlId }) => (
    <ColumnFullHeightBlock wrapperMix={styles.wrapper} htmlId={htmlId}>
        <div className={styles.content}>
            <Typography
                className={styles.title}
                tag="span"
                size={78}
                weight={800}
            >
                FAQ
            </Typography>
            <Accordeon
                quest="Did the Cyber Crew really create the astronaut for the GameStop NFT Marketplace?"
                info={
                    'Yes, that was us! Although it wasn’t always easy for us to keep it a secret, we loved every bit of the positive responses and praise our astronaut received. We knew we were the right Crew for the job!\n'
                }
            />
            <Accordeon
                quest="What is the C4 Collection?"
                info={
                    'Yes, that was us! Although it wasn’t always easy for us to keep it a secret, we loved every bit of the positive responses and praise our astronaut received. We knew we were the right Crew for the job!\n'
                }
            />

            <Accordeon
                quest="What were the original MINT prices for the C4 Collection?"
                info={
                    'Yes, that was us! Although it wasn’t always easy for us to keep it a secret, we loved every bit of the positive responses and praise our astronaut received. We knew we were the right Crew for the job!\n'
                }
            />

            <Accordeon
                quest={
                    'I’ve purchased ONE Cyber Clone and ONE Cyber Card. I know these are the only assets eligible for Gauge’s GEAR and MAYHEM Subscription. How many airdrops will I be receiving?\n'
                }
                info="I’ve purchased ONE Cyber Clone and ONE Cyber Card. I know these are the only assets eligible for Gauge’s GEAR and MAYHEM Subscription. How many airdrops will I be receiving?"
            />
        </div>
    </ColumnFullHeightBlock>
);
