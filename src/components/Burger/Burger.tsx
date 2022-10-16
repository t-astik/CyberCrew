/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Link from 'next/link';

import clsx from 'clsx';

import { Button } from 'src/components/Button/Button';
import { Routes } from 'src/config/routes';

import Instagram from 'src/assets/icons/instagramIcon.svg';
import Icon from 'src/assets/icons/Icon.svg';
import Twitter from 'src/assets/icons/twitterIcon.svg';

import styles from './Burger.module.css';

export type BurgerButtonProps = {
    burger: boolean;
    setBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger: React.FC<BurgerButtonProps> = ({ burger, setBurger }) => {
    const [share, setShare] = useState(false);

    return (
        <React.Fragment>
            <div
                onClick={() => setBurger((state) => !state)}
                className={clsx(styles.wrapper, burger && styles.activeWrapper)}
            >
                <div className={burger ? styles.active : styles.middleLine} />
            </div>
            {burger ? (
                <React.Fragment>
                    <div className={styles.burgerMenuWrapper} />

                    <div className={styles.burgerMenu}>
                        <div className={styles.linksBlock}>
                            <Link href={Routes.About}>
                                <a className={styles.link}>About Cyber Crew</a>
                            </Link>

                            <Link href={Routes.Assets}>
                                <a className={styles.link}>Manage assets</a>
                            </Link>

                            <div onClick={() => setBurger((state) => !state)}>
                                <Link href={Routes.LandingMint}>
                                    <a className={styles.link}>Mint</a>
                                </Link>
                            </div>

                            <div onClick={() => setBurger((state) => !state)}>
                                <Link href={Routes.LandingTeam}>
                                    <a className={styles.link}>Team</a>
                                </Link>
                            </div>

                            <div onClick={() => setBurger((state) => !state)}>
                                <Link href={Routes.LandingFaq}>
                                    <a className={styles.link}>FAQ</a>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={
                                share
                                    ? `${styles.shareBlock} ${styles.activeShare}`
                                    : `${styles.shareBlock}`
                            }
                        >
                            <div className={`${styles.network}`}>
                                <Icon />
                            </div>
                            <div className={styles.twitter}>
                                <Twitter />
                            </div>
                            <div className={styles.instagram}>
                                <Instagram />
                            </div>
                            <Button
                                onClick={() => setShare(!share)}
                                className={styles.buttonShare}
                            >
                                Share
                            </Button>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <span />
            )}
        </React.Fragment>
    );
};
