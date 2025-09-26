// src/App.js
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; // Add Notistack
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './pages/About';
import Contactus from './pages/contactus';
import Home from './pages/Home/index';
import ProjectDetails from './pages/ProjectDetails';
import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';
import UploadProject from './pages/UploadProject';

export const MyContext = createContext();

function App() {
  const [showheaderfooter, setshowheaderfooter] = useState(true);

  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {showheaderfooter && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
            <Route path="/SignIn" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/UploadProject" element={<UploadProject />} />
          </Routes>
          {showheaderfooter && <Footer />}
        </SnackbarProvider>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;