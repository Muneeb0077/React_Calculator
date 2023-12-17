import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quotes/Quote';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
   <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quotes" element={<Quote/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
     </Router>
   </>
  );
}

export default App;
