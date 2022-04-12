import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import Rommes from './components/Roomes/Rommes';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/roomes' element={<Rommes></Rommes>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
