import React from 'react';
import Image from 'next/image';

import { Typography } from 'src/components/Typography/Typography';
import { Button } from 'src/components/Button/Button';
import { PriceTable } from 'src/components/PriceTable/PriceTable';

import classNames from 'classnames';

import Discord from 'src/assets/icons/discord.svg';
import Twitter from 'src/assets/icons/twitterIcon.svg';
import Instagram from 'src/assets/icons/instagramIcon.svg';
import { ColumnFullHeightBlock } from 'src/components/PageLayout/PageLayout';

import RobotImg from 'src/public/images/mint/mintPageRobot.png';
import RobotImgMob from 'src/public/images/mint/mintPageRobotMobile.png';
import TopEllipse from 'src/public/images/mint/mintPageEllipseTop.png';
import MiddleEllipse from 'src/public/images/mint/mintPageEllipseMiddle.png';
import styles from './LandingMint.module.css';
import { BlockProps } from '../types';

export const LandingMint: React.FC<BlockProps> = ({ htmlId }) => (
    <ColumnFullHeightBlock columnMix={styles.mintPage} htmlId={htmlId}>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.metaBlock}>
                    <div>
                        <div className={styles.title}>
                            <Typography
                                className={styles.title}
                                tag="span"
                                weight={700}
                                size={78}
                            >
                                Become <span>a</span> part of <span>a</span>{' '}
                                unique community
                            </Typography>
                        </div>
                        <div className={styles.btnsBlock}>
                            <a
                                href="https://opensea.io/collection/cybercrew"
                                className="nav-link d-inline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className={styles.openSeaBtn} size="m">
                                    OpenSea
                                </Button>
                            </a>
                            <a
                                href="https://nft.gamestop.com/collection/cybercrew?r=MCwxNjMxMSwyMDU%3D"
                                className="nav-link d-inline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    className={styles.gamestopBtn}
                                    size="s"
                                    theme="transparent"
                                >
                                    Gamestop
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.socialNetworksDesktop}>
                        <a
                            href="https://discord.gg/SUCZfVddpv"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Discord className={styles.socialNetworksIcon} />
                        </a>
                        <a
                            href="https://mobile.twitter.com/cybercrewnft"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className={styles.socialNetworksIcon} />
                        </a>
                        <a
                            href="https://www.instagram.com/cybercrew.nft/"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className={styles.socialNetworksIcon} />
                        </a>
                    </div>
                </div>
                <div className={styles.robotBlock}>
                    <div className={styles.robotImgContainer}>
                        <div className={styles.topEllipseContainer}>
                            <Image
                                className={styles.topEllipse}
                                src={TopEllipse.src}
                                width={600}
                                height={900}
                                alt=""
                            />
                        </div>
                        <div className={styles.middleEllipseContainer}>
                            <Image
                                className={styles.middleEllipse}
                                src={MiddleEllipse.src}
                                width={300}
                                height={300}
                                alt=""
                            />
                        </div>
                        <div className={styles.bottomEllipseContainer}>
                            <Image
                                className={styles.bottomEllipse}
                                src={TopEllipse.src}
                                width={600}
                                height={800}
                                alt=""
                            />
                        </div>
                        <div
                            className={classNames({
                                [styles.card]: true,
                                [styles.top]: true,
                            })}
                        />
                        <div
                            className={classNames({
                                [styles.card]: true,
                                [styles.bottom]: true,
                            })}
                        />
                        <Image
                            className={styles.robotImg}
                            src={RobotImg.src}
                            width={516.43}
                            height={513.39}
                            alt="Robot"
                            placeholder="blur"
                            blurDataURL={RobotImgMob.src}
                        />
                        <Image
                            className={styles.robotImgMob}
                            src={RobotImgMob.src}
                            width={150}
                            height={300}
                            alt="Robot"
                            placeholder="blur"
                            blurDataURL={RobotImgMob.src}
                        />
                        <div className={styles.price}>
                            <PriceTable
                                usdPrice={345.12}
                                ethPrice={2.45}
                                percentage="+12.45"
                            />
                        </div>
                    </div>
                    <div className={styles.socialNetworksMob}>
                        <a
                            href="https://discord.gg/SUCZfVddpv"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Discord className={styles.socialNetworksIcon} />
                        </a>
                        <a
                            href="https://mobile.twitter.com/cybercrewnft"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className={styles.socialNetworksIcon} />
                        </a>
                        <a
                            href="https://www.instagram.com/cybercrew.nft/"
                            className="nav-link d-inline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className={styles.socialNetworksIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </ColumnFullHeightBlock>
);
