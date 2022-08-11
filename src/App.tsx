import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './styles/customTheme';
import './App.css';
import Header from './components/header';
import PresentationSection from './components/presentationSection';
import ExperienceProjectSection from './components/experienceProjectSection';
import SkillsSection from './components/skillsSection';
import ContactSection from './components/contactSection';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <PresentationSection />
      <SkillsSection />
      <ExperienceProjectSection />
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;
