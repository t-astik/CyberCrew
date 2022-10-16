import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ColumnFullHeightBlock } from 'src/components/PageLayout/PageLayout';
import { Routes } from 'src/config/routes';

import Ellipse from 'src/public/images/about/aboutPageEllipse.png';
import Text from 'src/public/images/404/404PageText.png';
import { Button } from '../../components/Button/Button';

import styles from './notFound.module.css';

export const NotFound: FC = () => (
    <ColumnFullHeightBlock columnMix={styles.notFoundPage}>
        <div className={styles.notFoundPageBG}>
            <div className={styles.ellipseContainer}>
                <Image
                    className={styles.ellipse}
                    src={Ellipse.src}
                    width={700}
                    height={700}
                    alt=""
                    blurDataURL={Ellipse.src}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <div className={styles.textImgContainer}>
                        <Image
                            className={styles.textImg}
                            src={Text.src}
                            width={700}
                            height={300}
                            alt=""
                            blurDataURL={Text.src}
                        />
                    </div>
                    <div className={styles.btnBlock}>
                        <Link href={Routes.Landing}>
                            <Button size="m" className={styles.downloadBtn}>
                                Back to homepage
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </ColumnFullHeightBlock>
);

export default NotFound;
