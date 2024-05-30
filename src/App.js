import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact.jsx';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer.jsx';
import Hero from './Components/Hero/Hero';
import MyProject from './Components/MyProject/MyProject.jsx';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <MyProject/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
