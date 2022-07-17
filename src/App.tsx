import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/UI/organisms/header';
import { theme } from './styles/ColorsPalette';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
