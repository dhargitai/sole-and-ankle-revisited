export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 950,
  desktopMin: 1300,
}

// Converted to rems:
export const QUERIES = {
  'mobile': `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'tablet': `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'laptop': `(max-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
}
