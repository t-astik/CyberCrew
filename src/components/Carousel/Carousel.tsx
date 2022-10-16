import React, { FC, PropsWithChildren, createRef } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import Slider from 'react-slick';

import styles from './Carousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowNext from '../../assets/icons/ArrowNext.svg';
import ArrowPrev from '../../assets/icons/ArrowPrev.svg';
import { Asset } from '../AssetsComponent/types';

type Props = {
    assets: Asset[];
};

export const Carousel: FC<PropsWithChildren<Props>> = ({ assets }) => {
    const sliderRef: any = createRef();

    const handleClickPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        sliderRef.current.slickPrev();
    };

    const handleClickNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        sliderRef.current.slickNext();
    };

    return (
        <div className={styles.root}>
            <Slider
                className={styles.carousel}
                ref={sliderRef}
                infinite
                arrows={false}
            >
                {assets.map((asset) => {
                    return (
                        <div className={styles.imageContainer} key={asset.id}>
                            <Image
                                className={styles.image}
                                src={asset.image}
                                key={asset.id}
                                width={asset.width}
                                height={asset.height}
                                alt=""
                                placeholder="blur"
                                blurDataURL={asset.image}
                            />
                        </div>
                    );
                })}
            </Slider>
            <button
                type="button"
                onClick={handleClickPrev}
                className={clsx({
                    [styles.switcher]: true,
                    [styles.leftSwitcher]: true,
                })}
            >
                <ArrowPrev />
            </button>
            <button
                type="button"
                onClick={handleClickNext}
                className={clsx({
                    [styles.switcher]: true,
                    [styles.rightSwitcher]: true,
                })}
            >
                <ArrowNext />
            </button>
        </div>
    );
};
