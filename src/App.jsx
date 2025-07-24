
import './App.css';
import { useState } from 'react';
import { LoadingScreen } from './Components/isLoadingScreen';
import { NavBar } from './Components/Section/Navbar';
import './index.css';
import MobileMenu from './Components/MobileMenu';
import { Home } from './Components/Section/Home';
import { About } from './Components/Section/About';
import { Projects } from './Components/Section/Projects';
import { Contact } from './Components/Section/Contacts';

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`transition-opacity duration-700 ${isloaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
