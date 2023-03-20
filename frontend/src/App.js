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
              path="/Screening"
              element={<Screening />}
              />
            <Route
              path="/Therapists"
              element={<Therapists />}
              />
            <Route
              path="/Blog"
              element={<Blog />}
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
