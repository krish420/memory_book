import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/HomePage/HomePage';
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
        <Route path="/user/home" element={<HomePage/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
