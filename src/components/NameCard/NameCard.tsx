import React from 'react';
import { Typography } from 'src/components/Typography/Typography';
import styles from './styles.module.css';

export type NameCardProps = {
    name: string;
};

export const NameCard: React.FC<NameCardProps> = ({ name }) => {
    return (
        <div className={styles.wrapper}>
            <Typography
                size={36}
                tag="span"
                weight={400}
                className={styles.name}
            >
                {name}
            </Typography>
        </div>
    );
};
