import './App.css'
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Service from "./components/Service/Service"
import Work from "./components/Works/Work"
import Customer from "./components/Customers/Customer"
import Latest_insight from "./components/Latest_insight/Latest_insight"
import GetStarted from "./components/GetStarted/GetStarted"
import Project from "./components/projects/Project"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ContactUs from "./components/ContactUs/ContactUs"
import Project_page from "./components/Project_page/Project_page"
import Blog from "./components/Blog/Blog"
import Navbar_routes from './components/Navbar/Navbar_routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  

  return (
    <>
    <ScrollToTop />
    <Routes>
        <Route path='/' element={
            <>
                <Navbar />
                <Hero />
                <About />
                <Service />
                <Project />
                <Work />
                <Customer />
                <Latest_insight />
                <GetStarted />
                <Footer />
            </>
        } />
        <Route path='/contact' element = {
            <>
                <Navbar_routes />
                <ContactUs />
                <Footer />
            </>
        } />
        <Route path='/project' element = {
            <>
                <Navbar_routes />
                <Project_page />
                <GetStarted />
                <Footer />
            </>
        } />
        <Route path='/blog' element = {
            <>
                <Navbar_routes />
                <Blog />
                <GetStarted />
                <Footer />
            </>
        } />
    </Routes>
    
    </>
  )
}

export default App
