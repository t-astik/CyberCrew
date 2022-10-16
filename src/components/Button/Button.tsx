import React from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

export type ButtonVariant = 'filled' | 'outlined';
export type ButtonTheme = 'accent' | 'white' | 'error' | 'transparent';
export type ButtonSize = 's' | 'm' | 'l';

export type ButtonProps = {
    variant?: ButtonVariant;
    theme?: ButtonTheme;
    size?: ButtonSize;
    rounded?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

/**
 * @param {ButtonSize} [props.size]
 * * sm - 20px x 45px
 * * md - 20px x 62px
 * * lg - 28px x 96px
 * @param {ButtonTheme} [props.theme]
 * * accent
 * * white
 * * error
 * * transparent
 * @param {ButtonVariant} [props.variant]
 * * filled
 * * outlined
 * @param {boolean} [props.rounded] - set rounded borders
 * @returns
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    size = 'm',
    theme = 'accent',
    variant = 'filled',
    rounded = true,
    className,
    ...rest
}) => {
    return (
        <button
            type="button"
            className={clsx(
                styles.button,
                styles[size],
                styles[theme],
                styles[variant],
                className,
                {
                    [styles.rounded]: rounded,
                },
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
