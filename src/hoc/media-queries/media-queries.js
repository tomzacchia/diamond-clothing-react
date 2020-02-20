import { css } from 'styled-components';

const SCREEN_SIZES = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280
};

const mediaQueries = Object.keys(SCREEN_SIZES).reduce((acc, sizeLabel) => {
  acc[sizeLabel] = (...styles) => css`
    @media (min-width: ${SCREEN_SIZES[sizeLabel]}px) {
      ${css(...styles)};
    }
  `;

  return acc;
}, {});

export default mediaQueries;
