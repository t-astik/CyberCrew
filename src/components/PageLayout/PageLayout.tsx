import clsx from 'clsx';
import React from 'react';
import { Header } from '../Header/Header';
import styles from './PageLayout.module.css';

type ColumnProps = {
    columnMix?: string;
    htmlId?: string;
    children: React.ReactNode;
};

export const Column: React.FC<ColumnProps> = ({
    columnMix,
    htmlId,
    children,
}) => (
    <div className={clsx(styles.column, columnMix)} id={htmlId}>
        {children}
    </div>
);

type PageLayoutProps = {
    wrapperMix?: string;
    contentMix?: string;
    children: React.ReactNode;
};

export const FreeformPageLayout: React.FC<PageLayoutProps> = ({
    wrapperMix,
    contentMix,
    children,
}) => (
    <div className={clsx(styles.wrapper, wrapperMix)}>
        <div className={styles.column}>
            <Header isAuth={false} />
        </div>

        <div className={clsx(styles.contentWrapper, contentMix)}>
            {children}
        </div>
    </div>
);

export const ColumnPageLayout: React.FC<PageLayoutProps & ColumnProps> = ({
    wrapperMix,
    contentMix,
    children,
    ...columnProps
}) => (
    <FreeformPageLayout wrapperMix={wrapperMix} contentMix={contentMix}>
        <Column {...columnProps}>{children}</Column>
    </FreeformPageLayout>
);

type ColumnFullHeightBlockProps = ColumnProps & {
    wrapperMix?: string;
};

export const ColumnFullHeightBlock: React.FC<ColumnFullHeightBlockProps> = ({
    wrapperMix,
    children,
    ...columnProps
}) => (
    <div className={clsx(styles.wrapper, wrapperMix)}>
        <Column
            {...columnProps}
            columnMix={clsx(styles.contentWrapper, columnProps.columnMix)}
        >
            {children}
        </Column>
    </div>
);
