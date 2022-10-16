// TODO: fixme
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Metamask from 'src/assets/icons/metamask.svg';
import GameStop from 'src/assets/icons/gamestop.svg';
import RefreshIcon from 'src/assets/icons/Refresh.svg';
import { Button } from 'src/components/Button/Button';
import React from 'react';
import { Drawer } from '../Drawer/Drawer';
import styles from './Wallet.module.css';

export type WalletMenuProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WalletMenu: React.FC<WalletMenuProps> = ({
    active,
    setActive,
}) => {
    return (
        <Drawer
            active={active}
            setActive={setActive}
            placement="right"
            width={554}
        >
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h3 className={styles.connectWallet}>
                        Connect your wallet
                    </h3>
                    <span className={styles.info}>
                        We only detect your wallet address to fetch your assets.
                        We do not access or perform any on-chain operation with
                        it.
                    </span>
                    <div className={styles.types}>
                        <div className={styles.type}>
                            <Metamask />
                        </div>
                        <div className={styles.type}>METAMASK</div>
                    </div>
                    <div className={styles.types}>
                        <div className={styles.type}>
                            <GameStop />
                        </div>
                        <div className={styles.type}>GameStop</div>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <Button size="m" className={styles.buttonConnect}>
                        Connect
                        <RefreshIcon className={styles.refreshIcon} />
                    </Button>
                </div>
            </div>
        </Drawer>
    );
};
