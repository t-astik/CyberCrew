const defaultUnits = [
    'cm',
    'mm',
    'in',
    'px',
    'pt',
    'pc',
    'em',
    'ex',
    'ch',
    'rem',
    'vw',
    'vh',
    'vmin',
    'vmax',
    '%',
] as const;

type DefaultUnitType = typeof defaultUnits[number];

export const getPropertySize = (
    size: string | number,
    reqUnit?: DefaultUnitType,
) => {
    const selectedUnit = reqUnit || 'px';
    if (typeof size === 'number') {
        return `${size}${selectedUnit}`;
    }
    const sizes = size.split('');
    return sizes
        .map((singleSize) =>
            defaultUnits.some((unit) => singleSize.includes(unit))
                ? singleSize
                : `${size}${selectedUnit}`,
        )
        .join(' ');
};
