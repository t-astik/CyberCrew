import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Accordeon.module.css';

import Circle from '../../assets/icons/Circle.svg';

interface Props {
    quest: string;
    info: string;
}

const Accordeon: React.FC<Props> = ({ quest, info }) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <div className={clsx(styles.infoCard, focus && styles.active)}>
            <div className={styles.content}>
                <h2>{quest}</h2>
                <div className={styles.span}>{info}</div>
            </div>
            <button
                type="button"
                onClick={() => setFocus(!focus)}
                className={styles.circle}
            >
                <Circle className={styles.circleSvg} />
            </button>
        </div>
    );
};

export default Accordeon;
