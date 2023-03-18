import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Feed from './pages/Feed/Feed';
import Login from './pages/Login/Login';
import Searchbar from './components/Searchbar/Searchbar';
import SideProfile from './components/SideProfile/SideProfile';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
           <Route path='/signup' element={<CreateAccount/>}></Route>
           <Route path='/feed' element={<><Searchbar/><Feed/><SideProfile/></>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
