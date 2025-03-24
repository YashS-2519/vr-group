import { useEffect } from 'react';
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar'
import Service from './pages/Service';
import Testimonial from './pages/Testimonial';
import ContactUs from './pages/ContactUs';

function App() {

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HomePage />
      <Service />
      <Testimonial />
      <ContactUs />
    </>
  )
}

export default App
