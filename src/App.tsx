import './index.css'
import FirstSection from './pages/FirstSection'
import SecondSection from './pages/SecondSection'
import  ThirdSection from './pages/ThirdSection'
import FourthSection from './pages/FourthSection'
import FiftSection from './pages/FiftSection'
import SixthSection from './pages/SixthSection'
import SeventhSection from './pages/SeventhSection'
import Header from './Header'
import Footer from './Footer'

function App() {
 
  return (
    <>
         <Header/>
          <div>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FiftSection/>
            <SixthSection/>
            <SeventhSection/>
          </div>
        <Footer/>
     </>
  )
}

export default App
