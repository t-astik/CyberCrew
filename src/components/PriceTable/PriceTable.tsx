import React from 'react';
import { Typography } from '../Typography/Typography';
import styles from './PriceTable.module.css';

type PriceTableProps = {
    ethPrice: number;
    usdPrice: number;
    percentage: string;
};

export const PriceTable: React.FC<PriceTableProps> = ({
    ethPrice,
    usdPrice,
    percentage,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <Typography
                    className={styles.ETH}
                    tag="span"
                    weight="400"
                    family={"'Outfit'"}
                    size={26}
                >
                    {`${ethPrice} ETH`}
                </Typography>

                <Typography
                    className={styles.Bid}
                    tag="span"
                    weight="500"
                    family="'Outfit'"
                    size={15}
                >
                    Latest Bid
                </Typography>
            </div>
            <div className={styles.block}>
                <Typography
                    className={styles.USD}
                    tag="span"
                    weight="400"
                    family={"'Outfit'"}
                    size={21}
                >
                    {`$${usdPrice}`}
                </Typography>
                <Typography
                    className={styles.procent}
                    tag="span"
                    style={{ color: '#52FF00' }}
                    weight="400"
                    size={15}
                >
                    {`${percentage}%`}
                </Typography>
            </div>
        </div>
    );
};
