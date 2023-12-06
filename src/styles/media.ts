export const breakpoints = {
    sm: 576,
    md: 991,
    lg: 1240,
};

export const media = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | string) =>
        `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
