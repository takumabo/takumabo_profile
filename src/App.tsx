import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
} from 'recoil';

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { customTheme } from './CustomTheme';

import TopPage from '@/pages/Top';

function App() {
  const theme = createTheme(customTheme)

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
      <TopPage />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
