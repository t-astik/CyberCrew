import React from 'react';
import Image from 'next/image';

import { Typography } from 'src/components/Typography/Typography';
import { TeamMemberCard } from 'src/components/TeamMember/TeamMember';
import { NameCard } from 'src/components/NameCard/NameCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ColumnFullHeightBlock } from 'src/components/PageLayout/PageLayout';
import { BlockProps } from '../types';

import Brenden from '../../../public/images/team/teamPageBrenden.png';
import Engwind from '../../../public/images/team/teamPageEngwind.png';
import styles from './LandingTeam.module.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import Ellipse from '../../../public/images/team/teamPageEllipse.png';

export const LandingTeam: React.FC<BlockProps> = ({ htmlId }) => (
    <ColumnFullHeightBlock columnMix={styles.teamPageWrapper} htmlId={htmlId}>
        <div className={styles.teamPageBG}>
            <div>
                <div className={styles.titleContainer}>
                    <Typography tag="span" size={78} className={styles.title}>
                        Team
                    </Typography>
                </div>
                <div className={styles.container}>
                    <div className={styles.firstPart}>
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
                        <div>
                            <TeamMemberCard src={Engwind} />
                            <div className={styles.cardWrapper}>
                                <NameCard name="Engwind" />
                            </div>
                        </div>

                        <div className={styles.textPart}>
                            <Typography
                                className={styles.text}
                                tag="p"
                                size={22}
                                style={{ lineHeight: '28px' }}
                            >
                                Engwind, the Founder of Cyber Crew, is a
                                world-renowned 3D CGI artist and designer, who
                                has been honing his mastery for over 13 years.{' '}
                                <br />
                                Norway is his base of operations, but also where
                                the majority of his inspiration comes from.{' '}
                                <br />
                                Engwind enjoys food and is a sucker for a good
                                bourbon. <br />
                                <br />
                                «Some of ENGWIND clients the last years has been
                                MSI, Rolling Stone Magazine, Demi Lovato,
                                Bitcoin, GameStop and many more. He is
                                specialized in 3D design and animation and has a
                                great passion for it»
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.secondPart}>
                        <div>
                            <TeamMemberCard src={Brenden} />
                            <div className={styles.cardWrapper}>
                                <NameCard name="Brenden" />
                            </div>
                        </div>

                        <div className={styles.textPart}>
                            <Typography
                                className={styles.text}
                                tag="p"
                                size={22}
                                style={{
                                    lineHeight: '28px',
                                }}
                            >
                                Brenden is the Co-Founder of Cyber Crew. He
                                brings his vision and creativity, as well as a
                                ton business/ <br />
                                management experience. <br />
                                In addition to his work with Cyber Crew, Brenden
                                is also is the Founder of Protocol: Gemini, a
                                tech startup focused on augmented reality and
                                other futuristic technology.
                                <br />
                                Raised in New Orleans, he comes from a family of
                                creators that fuels his devotion and creativity.
                                Brenden is a foodie, loves family, and truly
                                believes in the potential of humankind.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Swiper spaceBetween={50} slidesPerView={1} freeMode>
                        <SwiperSlide>
                            <div className={styles.firstPart}>
                                <div>
                                    <TeamMemberCard src={Engwind} />
                                    <div className={styles.cardWrapper}>
                                        <NameCard name="Engwind" />
                                    </div>
                                </div>

                                <div className={styles.textPart}>
                                    <Typography
                                        tag="p"
                                        size={22}
                                        style={{
                                            lineHeight: '28px',
                                            color: '#FFffff',
                                        }}
                                    >
                                        Engwind, the Founder of Cyber Crew, is a
                                        world-renowned 3D CGI artist and
                                        designer, who has been honing his
                                        mastery for over 13 years. <br />
                                        Norway is his base of operations, but
                                        also where the majority of his
                                        inspiration comes from. <br />
                                        Engwind enjoys food and is a sucker for
                                        a good bourbon. <br />
                                        <br />
                                        «Some of ENGWIND clients the last years
                                        has been MSI, Rolling Stone Magazine,
                                        Demi Lovato, Bitcoin, GameStop and many
                                        more. He is specialized in 3D design and
                                        animation and has a great passion for
                                        it»
                                    </Typography>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.secondPart}>
                                <div>
                                    <TeamMemberCard src={Brenden} />
                                    <div className={styles.cardWrapper}>
                                        <NameCard name="Brenden" />
                                    </div>
                                </div>

                                <div className={styles.textPart}>
                                    <Typography
                                        tag="p"
                                        size={22}
                                        style={{
                                            lineHeight: '28px',
                                            color: '#FFffff',
                                        }}
                                    >
                                        Brenden is the Co-Founder of Cyber Crew.
                                        He brings his vision and creativity, as
                                        well as a ton business/ <br />
                                        management experience. <br />
                                        In addition to his work with Cyber Crew,
                                        Brenden is also is the Founder of
                                        Protocol: Gemini, a tech startup focused
                                        on augmented reality and other
                                        futuristic technology.
                                        <br />
                                        Raised in New Orleans, he comes from a
                                        family of creators that fuels his
                                        devotion and creativity. Brenden is a
                                        foodie, loves family, and truly believes
                                        in the potential of humankind.
                                    </Typography>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </ColumnFullHeightBlock>
);
