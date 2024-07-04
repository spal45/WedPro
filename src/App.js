import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Gallery from "./Components/Pages/Gallery";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Navbarr from "./Components/Common/Navbarr";
import Footer from "./Components/Common/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbarr/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/gallery" element ={<Gallery/>}/>
          <Route path="/services" element ={<Services/>}/>
          <Route path="/contact" element ={<Contact/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
