import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.css';

type TeamMemberСardProps = {
    src: ImageProps['src'];
};

export const TeamMemberCard: React.FC<TeamMemberСardProps> = ({ src }) => (
    <div className={styles.wrapper}>
        <Image src={src} alt="A team member" placeholder="blur" />
    </div>
);
