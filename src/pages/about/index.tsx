import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

import { Typography } from 'src/components/Typography/Typography';
import { ColumnPageLayout } from 'src/components/PageLayout/PageLayout';

import RobotImg from 'src/public/images/about/aboutPageRobot.png';
import Ellipse from 'src/public/images/about/aboutPageEllipse.png';

import styles from './about.module.css';

type RobotType = {
    name: string;
    description: string;
    image: {
        name: string;
        width: number;
        height: number;
    };
    information: {
        class: string;
        ability: string;
        fraction: string;
    };
    statistics: {
        level: number;
        durability: number;
        speed: string;
    };
    armament: string;
};

const robot: RobotType = {
    name: 'A maneuverable attacking robot.',
    description:
        'The Blitz ability is called Hacking. When activated, Blitz fires 3 shots, similar to shotgun shots, which reduce the damage inflicted by enemy robot weapons by 75% for 5 seconds.During this time, the speed of the Blitz increases by 100% (110 km/h at maximum speed), and the Blitz activates the temporary Aegis shield (does not recover during use). The ability lasts for 9 seconds and has a 17-second cooldown.',
    image: {
        name: RobotImg.src,
        width: 587,
        height: 939,
    },
    information: {
        class: 'average',
        ability: 'hacking',
        fraction: 'DSK',
    },
    statistics: {
        level: 1,
        durability: 93.5,
        speed: '47 mph',
    },
    armament: '4-time punisher',
};

const AboutPage: NextPage = () => (
    <div className={styles.aboutPage}>
        <div className={styles.aboutPageBG}>
            <ColumnPageLayout>
                <div className={styles.content}>
                    <div className={styles.metaBlock}>
                        <Typography
                            className={styles.name}
                            tag="p"
                            weight={700}
                            size={63}
                        >
                            {robot.name}
                        </Typography>
                        <div className={styles.description}>
                            <Typography
                                className={styles.description}
                                tag="p"
                                weight={500}
                                size={20}
                            >
                                {robot.description}
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.robotBlock}>
                        <div className={styles.robotContainer}>
                            <div className={styles.ellipseContainer}>
                                <Image
                                    className={styles.ellipse}
                                    src={Ellipse.src}
                                    width={1000}
                                    height={1000}
                                    alt=""
                                    blurDataURL={Ellipse.src}
                                />
                            </div>
                            <Image
                                className={styles.robotImg}
                                src={robot.image.name}
                                width={robot.image.width}
                                height={robot.image.height}
                                alt="Robot"
                            />
                            <div className={styles.info}>
                                <div className={styles.information}>
                                    <p>Information:</p>
                                    &nbsp;
                                    <p>Class - {robot.information.class}</p>
                                    <p>Ability - {robot.information.ability}</p>
                                    <p>
                                        Fraction - {robot.information.fraction}
                                    </p>
                                    &nbsp;
                                </div>
                                <div className={styles.statistics}>
                                    <p>Statistics:</p>
                                    &nbsp;
                                    <p>Level {robot.statistics.level}</p>
                                    <p>
                                        Durability {robot.statistics.durability}
                                    </p>
                                    <p>Speed {robot.statistics.speed}</p>
                                    &nbsp;
                                </div>
                                <div className={styles.armament}>
                                    <p>Armament:</p>
                                    &nbsp;
                                    <p>{robot.armament}</p>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ColumnPageLayout>
        </div>
    </div>
);

export default AboutPage;
