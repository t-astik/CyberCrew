import React from 'react';

import RCModal from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import styles from './Modal.module.css';

type Props = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    animation?: string;
    maskAnimation?: string;
};

export const Modal: React.FC<Props> = ({
    active,
    setActive,
    children,
    animation,
    maskAnimation,
}) => {
    return (
        <RCModal
            visible={active}
            animation={animation}
            maskAnimation={maskAnimation}
            // animation="zoom"
            // maskAnimation="fade"
            onClose={() => setActive((state) => !state)}
            rootClassName={styles.modal}
        >
            {children}
        </RCModal>
    );
};
