import React from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function index() {
  return (
    <div className='App'>
      <NavigationBar />
      <Header />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
