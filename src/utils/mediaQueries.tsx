import Responsive from 'react-responsive';
import React from 'react';

export const MaxUltraSmall = (props: object) => (
    <Responsive {...props} maxWidth={400} />
);

export const MaxSmall = (props: object) => (
    <Responsive {...props} maxWidth={600} />
);

export const MaxMedium = (props: object) => (
    <Responsive {...props} maxWidth={1100} />
);

export const MaxLarge = (props: object) => (
    <Responsive {...props} maxWidth={1250} />
);

export const MinUltraSmall = (props: object) => (
    <Responsive {...props} minWidth={400} />
);

export const MinSmall = (props: object) => (
    <Responsive {...props} minWidth={600} />
);

export const MinMedium = (props: object) => (
    <Responsive {...props} minWidth={1101} />
);

export const MinLarge = (props: object) => (
    <Responsive {...props} minWidth={1251} />
);
