import React from 'react';
import { getInlineStyle } from 'src/utils/getInlineStyle';
import { Button, ButtonProps } from '../Button/Button';
import styles from './IconButton.module.css';

export type IconButtonProps = {
    icon: React.ReactElement;
} & Omit<ButtonProps, 'size'>;

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    style,
    ...rest
}) => (
    <Button
        style={getInlineStyle({
            style,
            variables: { height: '16px', width: '16px' },
        })}
        {...rest}
        rounded
    >
        <div className={styles.icon}>{icon}</div>
    </Button>
);
