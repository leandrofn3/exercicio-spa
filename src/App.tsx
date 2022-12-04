import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Banner from './components/banner';
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../src/config/theme'

function App() {
  return (
  <ThemeProvider theme={ myTheme.light }>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>

  </ThemeProvider>
  );
}

export default App;
