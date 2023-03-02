import './App.css';
import Navbar from './component/Navbar';
import FirstSection from './component/FirstSection';
import SecondSection from './component/SecondSection';
import ThirdSection from './component/ThirdSection';
import Slogan from './component/Slogan';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <Slogan />
      <ThirdSection />
      <Footer />
    </div>
  );
}

export default App;
