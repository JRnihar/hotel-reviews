import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import Rommes from './components/Roomes/Rommes';
import ShowDwtails from './components/Showdetails/ShowDwtails';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/roomes' element={<Rommes></Rommes>}></Route>
      <Route path='/roomes/:id' element={<ShowDwtails></ShowDwtails>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
