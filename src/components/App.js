import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';
import About from './About';
import Contact from './Contact';
import CustomSoftware from './CustomSoftware';
import LandingPage from './LandingPage';
import MobileApps from './MobileApps';
import Revolution from './Revolution';
import Services from './Services';
import Websites from './Websites';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            exact
            path="/customsoftware"
            element={
              <CustomSoftware
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            }
          />
          <Route
            exact
            path="/mobileapps"
            element={
              <MobileApps
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            }
          />
          <Route
            exact
            path="/websites"
            element={
              <Websites
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            }
          />
          <Route exact path="/revolution" element={<Revolution />} />
          <Route exact path="/about" element={<About setValue={setValue} />} />
          <Route
            exact
            path="/contact"
            element={<Contact setValue={setValue} />}
          />
          <Route exact path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
