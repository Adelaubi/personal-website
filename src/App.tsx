import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/UI/organisms/header';
import { theme } from './styles/ColorsPalette';
import './App.css';
import PresentationSection from './components/UI/organisms/presentationSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PresentationSection />
    </ThemeProvider>
  );
}

export default App;
