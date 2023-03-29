import { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/HomePage/Navbar';
import Footer from './component/HomePage/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import Advice from './pages/Advice'
import Therapists from './pages/Therapists'
import Blog from './pages/Blog'
import Resources from './pages/Resources'
import Screening from './pages/Screening'
import LoginPage from './component/HomePage/LoginPage'
import {Helmet} from "react-helmet";

function App() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginFormVisible(true);
  };


  return (
    
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Stay Alive</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <BrowserRouter>
        <Navbar onLoginButtonClick={handleLoginButtonClick} />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About-Us" element={<AboutUs />} />
            <Route path="/Contact-Us" element={<ContactUs />} />
            <Route path="/Advice" element={<Advice />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Screening" element={<Screening />} />
            <Route path="/Therapists" element={<Therapists />} />
            <Route path="/Blog" element={<Blog />} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <div id="login-form" style={{ display: isLoginFormVisible ? 'block' : 'none' }}>
        <LoginPage />
      </div>
      
    </div>
    

  );
}

export default App;

/*

            <Route
              path="/Contact-Us"
              element={<ContactUs />}
              />
            <Route
              path="/Advice"
              element={<Advice />}
              />
            <Route
              path="/Resources"
              element={<Resources />}
              />
            <Route
              path="/Therapists"
              element={<Therapists />}
              />
            <Route
              path="/Blog"
              element={<Blog />}
              />
*/
