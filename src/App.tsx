import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './styles/customTheme';
import './App.css';
import Header from './components/UI/organisms/header';
import PresentationSection from './components/UI/organisms/presentationSection';
import ExperienceProjectSection from './components/UI/organisms/experienceProjectSection';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <PresentationSection />
      <ExperienceProjectSection />
    </ThemeProvider>
  );
}

export default App;
