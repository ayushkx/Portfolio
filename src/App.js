import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Particlebackground from "./components/Particlebackground";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar name="Aishwary Bhadauriya" about="About" />
        <Home />
        <Particlebackground />
        <div style={{ backgroundColor: "black" }}>
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
