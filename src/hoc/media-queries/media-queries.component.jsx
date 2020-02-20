import React from 'react';
import { ThemeProvider } from 'styled-components';
import mediaQueries from './media-queries';

const MediaQueriesTheme = ({ children }) => (
  <ThemeProvider theme={{ ...mediaQueries }}>{children}</ThemeProvider>
);

export default MediaQueriesTheme;
