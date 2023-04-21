import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Menu from './components/Menu';
// import Admin from './components/Admin/admin';
import BurgerState from './context/burgers/BurgerState';
import Kitchen from './components/Kitchen';

function App() {
  return (
    <BurgerState>
        <Router>
          <div>
          <Navbar />
          <div className="container">
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/kitchen" element={<Kitchen/>}/>
            </Routes>
          </div>
          </div>
        </Router>
        </BurgerState>
  );
}

export default App;
