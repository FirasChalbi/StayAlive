import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
              />
            <Route
              path="/About-Us"
              element={<AboutUs />}
              />
            
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
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
