import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import ForgotPassword from './components/login/ForgotPassword';
import VerifyCode from './components/login/VerifyCode';
import ResetPassword from './components/login/ResetPassword';
import TripList from './components/trips/TripList';
import Header from './components/Header';
import Trip from './components/trips/Trip';
import Filter from './components/trips/Filter';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/verify-code" element={<VerifyCode/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/" element={<TripList/>} />
          </Routes>
        </div>
      </Router>
    </div>    
  );
}

export default App;
