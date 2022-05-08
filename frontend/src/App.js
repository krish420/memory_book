import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import LandingPage from './Component/Pages/LandingPage/LandingPage';
import SignupPage from './Component/Pages/SignupPage/SignupPage';
import LoginPage from './Component/Pages/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/user/home" element={<NavBar/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
