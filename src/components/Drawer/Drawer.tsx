import React from 'react';
import RCDrawer, { DrawerProps } from 'rc-drawer';

import 'rc-drawer/assets/index.css';
import styles from './Drawer.module.css';

import CloseIcon from '../../assets/icons/CloseIcon.svg';

const maskMotion: DrawerProps['maskMotion'] = {
    motionAppear: true,
    motionName: 'mask-motion',
};

const motion: DrawerProps['motion'] = (placement) => ({
    motionAppear: true,
    motionName: `panel-motion-${placement}`,
});

type Props = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    width?: number | string;
    height?: number | string;
    placement: 'left' | 'right' | 'top' | 'bottom';
};

export const Drawer: React.FC<Props> = ({
    active,
    setActive,
    children,
    placement,
    width,
    height,
}) => {
    return (
        <RCDrawer
            open={active}
            maskMotion={maskMotion}
            motion={motion}
            onClose={() => setActive(!active)}
            width={width}
            height={height}
            wrapperClassName={styles.wrapper}
            placement={placement}
        >
            <div className={styles.closeIconContainer}>
                <CloseIcon
                    className={styles.closeIcon}
                    onClick={() => setActive((state) => !state)}
                />
            </div>
            {children}
        </RCDrawer>
    );
};
