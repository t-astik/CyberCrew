import React, { FC } from 'react';
import Image from 'next/image';

import clsx from 'clsx';

import { ColumnPageLayout } from 'src/components/PageLayout/PageLayout';
import {
    AssetsComponent,
    AssetsComponentProps,
} from '../../components/AssetsComponent/AssetsComponent';
import { Typography } from '../../components/Typography/Typography';

import Avatar from '../../public/images/assetsManager/avatar.png';
import Equipment from '../../public/images/assetsManager/equipment.png';
import Vehicle from '../../public/images/assetsManager/vehicle.png';
import Ellipse from '../../public/images/assetsManager/assetsPageEllipse.png';

import styles from './assets.module.css';

const avatars: AssetsComponentProps = {
    title: 'Avatars block',
    assets: [
        {
            id: 'avatar',
            image: Avatar.src,
            width: 282,
            height: 220,
        },
        {
            id: 'avatar1',
            image: Avatar.src,
            width: 282,
            height: 220,
        },
    ],
    carousel: true,
};

const equipments: AssetsComponentProps = {
    title: 'Equipment blocks',
    assets: [
        {
            id: 'equipment',
            image: Equipment.src,
            width: 424,
            height: 208,
        },
        {
            id: 'equipment1',
            image: Equipment.src,
            width: 424,
            height: 208,
        },
    ],
    carousel: true,
};

const vehicles: AssetsComponentProps = {
    title: 'Vehicles block',
    assets: [
        {
            id: 'vehicle',
            image: Vehicle.src,
            width: 386,
            height: 209,
        },
        {
            id: 'vehicle1',
            image: Vehicle.src,
            width: 386,
            height: 209,
        },
    ],
    carousel: true,
};

export const AssetsPage: FC = () => {
    return (
        <div className={styles.assetsPage}>
            <div className={styles.assetsPageBG}>
                <ColumnPageLayout>
                    <div className={styles.content}>
                        <div className={styles.headerContainer}>
                            <Typography
                                className={styles.title}
                                tag="span"
                                weight={700}
                                size={63}
                            >
                                Manage assets page
                            </Typography>
                        </div>

                        <div className={styles.assetsContainer}>
                            <div className={styles.ellipseContainer}>
                                <Image
                                    className={styles.ellipse}
                                    src={Ellipse.src}
                                    width={1000}
                                    height={600}
                                    alt=""
                                    blurDataURL={Ellipse.src}
                                />
                            </div>
                            <div className={styles.assetsRow}>
                                <div
                                    className={clsx({
                                        [styles.assetsCol]: true,
                                        [styles.leftAssetsCol]: true,
                                    })}
                                >
                                    <AssetsComponent
                                        title={avatars.title}
                                        assets={avatars.assets}
                                        carousel
                                    />

                                    <AssetsComponent
                                        title={vehicles.title}
                                        assets={vehicles.assets}
                                        carousel
                                    />
                                </div>
                                <div className={styles.assetsCol}>
                                    <AssetsComponent
                                        title={equipments.title}
                                        assets={equipments.assets}
                                        carousel
                                    />

                                    <AssetsComponent
                                        title="Art block"
                                        assets={avatars.assets}
                                        carousel={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ColumnPageLayout>
            </div>
        </div>
    );
};

export default AssetsPage;
