import React from 'react';
import clsx from 'clsx';
import { getInlineStyle } from 'src/utils/getInlineStyle';
import styles from './Flex.module.css';

export type DisplayFlex = 'flex' | 'inline-flex';

export type FlexProps = {
    display?: DisplayFlex;
    alignItems?: React.CSSProperties['alignItems'];
    justifyContent?: React.CSSProperties['justifyContent'];
    direction?: React.CSSProperties['flexDirection'];
    wrap?: React.CSSProperties['flexWrap'];
    fullWidth?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export type FlexChildProps = {
    flex?: React.CSSProperties['flex'];
    basis?: React.CSSProperties['flexBasis'];
    shrink?: React.CSSProperties['flexShrink'];
    grow?: React.CSSProperties['flexGrow'];
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

/**
 * @param {} [display]
 * * flex
 * * inline-flex
 * @default flex
 * @param {} [alignItems]
 * @default initial
 * @param {} [justifyContent]
 * @default initial
 * @param {} [direction]
 * @default row
 * @param {} [wrap]
 * @default nowrap
 * @param {} [fullWidth]
 * @default false
 * @returns
 */
const Wrapper: React.FC<React.PropsWithChildren<FlexProps>> = ({
    children,
    display = 'flex',
    alignItems = 'initial',
    justifyContent = 'initial',
    direction = 'row',
    wrap = 'nowrap',
    style,
    fullWidth = false,
    className,
    ...rest
}) => (
    <div
        className={clsx(styles.flexWrapper, className, {
            [styles.fullWidth]: fullWidth,
        })}
        style={getInlineStyle({
            style,
            variables: { display, alignItems, justifyContent, direction, wrap },
        })}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
    >
        {children}
    </div>
);

/**
 * @param {} [flex]
 * @param {} [grow]
 * @param {} [shrink]
 * @param {} [basis]
 * @returns
 */
const Child: React.FC<React.PropsWithChildren<FlexChildProps>> = ({
    children,
    flex,
    basis,
    shrink,
    grow,
    style,
    className,
    ...rest
}) => (
    <div
        className={clsx(styles.flexChild, className)}
        style={getInlineStyle({
            style,
            variables: { flex, basis, shrink, grow },
        })}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
    >
        {children}
    </div>
);

export const Flex = {
    Wrapper,
    Child,
};
