import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Particlebackground from './components/Particlebackground';
import Project from './components/Project';
import Footer from './components/Footer'

function App() {
  return (
   <>
     <div>
          <Navbar name="Ayush kushwaha" about='About'/>
          <Home/>
          <Particlebackground/>
          <div style={{backgroundColor: '#ebf1fd'}}>
            <About/>
            <Project/>
          </div>
          <Footer/>
     </div>
     
   </>
  );
}

export default App;
