import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import FiftSection from './pages/FiftSection';
import SixthSection from './pages/SixthSection';
import SeventhSection from './pages/SeventhSection';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './pages/Aboutus'; 
import Landing from './Landin'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/first" element={<FirstSection />} />
          <Route path="/second" element={<SecondSection />} />
          <Route path="/third" element={<ThirdSection />} />
          <Route path="/fourth" element={<FourthSection />} />
          <Route path="/fifth" element={<FiftSection />} />
          <Route path="/sixth" element={<SixthSection />} />
          <Route path="/seventh" element={<SeventhSection />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />

        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
