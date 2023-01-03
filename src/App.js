import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <SocialLinks />
    
      <footer style={{backgroundColor: 'black'}}>
            <br></br>
            <h3 className="text-4xl font-signature mt-8-secondary mb-5-secondary text-center text-white">Developed by Ishwar Mohan..</h3>
            <br></br>
        </footer>
    </div>
  );
}

export default App;
