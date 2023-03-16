import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Feed from './pages/Feed/Feed';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
           <Route path='/signup' element={<CreateAccount/>}></Route>
           <Route path='/feed' element={<Feed/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
