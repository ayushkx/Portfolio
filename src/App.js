import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Particlebackground from './components/Particlebackground';

function App() {
  return (
   <>
     <div>
          <Navbar name="Ayush kushwaha" about='About'/>
          <Home/>
          <Particlebackground/>
     </div>
     
   </>
  );
}

export default App;
