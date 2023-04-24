// import logo from './image/logo_ku_en.png';
// import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
