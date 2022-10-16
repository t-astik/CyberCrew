import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import clsx from 'clsx';

import Wallet from 'src/assets/icons/WalletIcon.svg';

import { Button } from 'src/components/Button/Button';
import { Routes } from 'src/config/routes';
import { Burger } from '../Burger/Burger';
import { WalletMenu } from '../WalletMenu/WalletMenu';

import styles from './Header.module.css';

type Props = {
    isAuth: boolean;
};

export const Header: React.FC<Props> = ({ isAuth }) => {
    const [active, setActive] = useState<boolean>(false);
    const [burger, setBurger] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = burger ? 'hidden' : 'visible';
    }, [burger]);

    return (
        <header className={styles.wrapper}>
            <div
                className={clsx(
                    styles.logoPart,
                    burger && styles.logoPartActive,
                )}
            >
                <Link href={Routes.Landing}>
                    <h2 className={styles.logo}>
                        Cyber<span>Crew</span>
                    </h2>
                </Link>
            </div>

            <div className={styles.btnsBlock}>
                {isAuth ? (
                    <button
                        type="button"
                        className={styles.wallet}
                        onClick={() => setActive(!active)}
                    >
                        <Wallet />
                    </button>
                ) : (
                    <React.Fragment>
                        <Button
                            onClick={() => setActive(!active)}
                            className={styles.connectBtn}
                            size="s"
                            theme="accent"
                        >
                            Connect Wallet
                        </Button>
                        <Button
                            onClick={() => setActive(!active)}
                            className={styles.connectBtnMob}
                            size="s"
                            theme="accent"
                        >
                            <Wallet />
                        </Button>
                    </React.Fragment>
                )}
                <Burger setBurger={setBurger} burger={burger} />
                <WalletMenu setActive={setActive} active={active} />
            </div>
        </header>
    );
};
