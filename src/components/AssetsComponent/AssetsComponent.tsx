import React, { FC, PropsWithChildren, useState } from 'react';

import { Carousel } from '../Carousel/Carousel';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

import styles from './AssetsComponent.module.css';
import { Asset } from './types';

export type AssetsComponentProps = {
    title: string;
    assets: Asset[];
    carousel: boolean;
};

const formats: string[] = [
    'PFP',
    'GIF ',
    'WALLPAPER',
    'GIF (w/background)',
    'JPEG',
    'OBJ',
    'FBX',
    'GLB',
    'PNG ',
];

export const AssetsComponent: FC<PropsWithChildren<AssetsComponentProps>> = ({
    title,
    assets,
    carousel,
}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <React.Fragment>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                animation="zoom"
                maskAnimation="fade"
            >
                <div className={styles.modalContent}>
                    {formats.map((format) => (
                        <Button
                            className={styles.formatBtn}
                            size="s"
                            key={format}
                        >
                            <Typography tag="span" weight={600} size={18}>
                                {format}
                            </Typography>
                        </Button>
                    ))}
                </div>
            </Modal>
            <div className={styles.container}>
                {carousel === true ? (
                    <React.Fragment>
                        <div className={styles.carouselBlock}>
                            <Carousel assets={assets} />
                        </div>
                        <div className={styles.metaBlock}>
                            <div className={styles.assetTitleBlock}>
                                <Typography
                                    className={styles.assetTitle}
                                    tag="p"
                                    weight={500}
                                    size={36}
                                >
                                    {title}
                                </Typography>
                            </div>
                            <div className={styles.downloadButtonBlock}>
                                <Button
                                    className={styles.downloadBtn}
                                    size="s"
                                    onClick={() => setModalActive(true)}
                                >
                                    <Typography
                                        tag="span"
                                        weight={600}
                                        size={18}
                                    >
                                        Download
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <div className={styles.metaBlock}>
                        <div className={styles.assetTitleBlock}>
                            <Typography
                                className={styles.assetTitle}
                                tag="p"
                                weight={500}
                                size={36}
                            >
                                {title}
                            </Typography>
                        </div>
                        <div className={styles.downloadButton}>
                            <Button
                                className={styles.downloadBtn}
                                size="s"
                                onClick={() => setModalActive(true)}
                            >
                                <Typography tag="span" weight={600} size={18}>
                                    Download
                                </Typography>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};
