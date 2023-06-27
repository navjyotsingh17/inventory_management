import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManageItem from './pages/manageitem';
import AddItem from './pages/additem';
import EditItem from './pages/edititem';
import Home from './pages/home';
import Signin from './pages/signin';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route excat path='/' element={<Signin />}/>
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/manage_items' element={<ManageItem />} />
        <Route path='/add_item' element={<AddItem />} />
        <Route path='/manage_items/edit_item/:id' element={<EditItem />} />
      </Routes>
    </Router>
  );
}

export default App;
