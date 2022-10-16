import clsx from 'clsx';
import React from 'react';
import { getInlineStyle } from 'src/utils/getInlineStyle';
import { getPropertySize } from 'src/utils/getPropertySize';
import styles from './Typography.module.css';

type TypographyElementsType =
    | HTMLHeadingElement
    | HTMLSpanElement
    | HTMLParagraphElement;

export type AvailableTypographyTags = 'h1' | 'h2' | 'h3' | 'span' | 'p';
export type AvailableTypographyWeights = React.CSSProperties['fontWeight'];
export type AvailableTypographyFontSizes = number | string;
export type AvailableTypographyAlign = React.CSSProperties['textAlign'];
export type AvailableTypographyFamily = React.CSSProperties['fontFamily'];

export type TypographyProps = {
    tag?: AvailableTypographyTags;
    weight?: AvailableTypographyWeights;
    size?: AvailableTypographyFontSizes;
    align?: AvailableTypographyAlign;
    family?: AvailableTypographyFamily;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<TypographyElementsType>,
    TypographyElementsType
>;

/**
 * @param {} [tag] - tag of the element
 * * h1
 * * h2
 * * h3
 * * p
 * * span
 * @param {} [weight] - font weight
 * @param {} [size] - font size
 * @param {} [align] - text align
 * @param {} [family] -  font family 

 * @returns
 */
export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    className,
    style,
    tag = 'p',
    weight,
    size,
    align,
    family = 'sans-serif',
}) => {
    const ElementToRender = tag;

    return (
        <ElementToRender
            style={getInlineStyle({
                style,
                variables: {
                    weight,
                    align,
                    family,
                    ...(size && { size: getPropertySize(size) }),
                },
            })}
            className={clsx(className, styles.typography, styles[tag])}
        >
            {children}
        </ElementToRender>
    );
};
