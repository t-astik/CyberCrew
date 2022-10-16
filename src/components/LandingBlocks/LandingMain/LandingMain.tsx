import Link from 'next/link';
import React from 'react';
import { Button } from 'src/components/Button/Button';
import Twitter from 'src/assets/icons/twitterIcon.svg';
import Discord from 'src/assets/icons/discord.svg';

import Image from 'next/image';
import { PriceTable } from 'src/components/PriceTable/PriceTable';
import { ColumnPageLayout } from 'src/components/PageLayout/PageLayout';
import Vector from 'src/public/images/index/mainPageLine.png';
import MainImage from 'src/public/images/index/mainPageRobot.png';
import Ellipse from 'src/public/images/about/aboutPageEllipse.png';

import EllipseMob from 'src/public/images/index/mainPageEllipseMob.png';
import { Routes } from 'src/config/routes';
import styles from './LandingMain.module.css';

export const LandingMain: React.FC = () => (
    <ColumnPageLayout columnMix={styles.relativeContainer}>
        <div className={styles.firstPart}>
            <h1 className={styles.title}>
                CyberCrew &mdash; <span>Extraordinary</span> NFTs
            </h1>
            <p className={styles.subtitle}>
                We are creating a community for gamers all over the world.
                It&apos;s time to make money on what you really love!
            </p>
            <div className={styles.btnsBlock}>
                <Link href={Routes.LandingMint}>
                    <a>
                        <Button className={styles.createBtn} size="m">
                            Create your own robot
                        </Button>
                    </a>
                </Link>
                <Link href={Routes.Assets}>
                    <a>
                        <Button
                            className={styles.inventoryBtn}
                            size="s"
                            theme="transparent"
                        >
                            My inventory
                        </Button>
                    </a>
                </Link>
            </div>
            <div className={styles.socialNetworks}>
                <a
                    href="https://discord.gg/SUCZfVddpv"
                    className="nav-link d-inline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Discord />
                </a>
                <a
                    href="https://mobile.twitter.com/cybercrewnft"
                    className="nav-link d-inline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Twitter style={{ marginLeft: '20px' }} />
                </a>
            </div>
        </div>

        <div className={styles.secondPart}>
            <div className={styles.secondPartBox}>
                <div className={styles.ellipseContainer}>
                    <Image
                        className={styles.ellipse}
                        src={Ellipse.src}
                        width={1300}
                        height={1300}
                        alt=""
                        blurDataURL={Ellipse.src}
                    />
                </div>
                <div className={styles.ellipseContainerMob}>
                    <Image
                        className={styles.ellipseMob}
                        src={EllipseMob.src}
                        width={600}
                        height={900}
                        alt=""
                    />
                </div>
                <Image src={MainImage} alt="" placeholder="blur" />
                <div className={styles.vector}>
                    <Image src={Vector} alt="" />
                </div>
                <div className={styles.price}>
                    <PriceTable
                        usdPrice={1000}
                        ethPrice={1000}
                        percentage="1000"
                    />
                </div>
                <div className={styles.socialNetworksMob}>
                    <a
                        href="https://discord.gg/SUCZfVddpv"
                        className="nav-link d-inline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Discord />
                    </a>
                    <a
                        href="https://mobile.twitter.com/cybercrewnft"
                        className="nav-link d-inline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter style={{ marginLeft: '20px' }} />
                    </a>
                </div>
            </div>
        </div>
    </ColumnPageLayout>
);
