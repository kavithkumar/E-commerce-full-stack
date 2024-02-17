
import './App.css';

import { CardProducts } from './Components/CardProducts';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartDetails from './Components/CartDetails';

import React, {  useState } from 'react';
import Navb from './Components/navbar';
import Login from './Components/login';

import Logout from './Components/logout';
import Signup from './Components/signup';




function App() {
  const cartDetails=useSelector((store)=>store.Carts.cartItems)
  let [username,setUsername]=useState('')
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        
      <Container>
        <Navbar.Brand href="#home">Shopping-Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <b className='nav-link'>welcome {username}</b>
            <Nav.Link as={Link} to="/cart">Cart({cartDetails.length})</Nav.Link>
            <Nav.Link as={Link} to="/myorder">myorder</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
            <Nav.Link as={Link} to="/signup">signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navb username={username}/>
      </Container>

    </Navbar>
    <Routes>
      <Route path='/products' element={<CardProducts></CardProducts>}></Route>
      <Route path='/cart' element={<CartDetails></CartDetails>}></Route>
      <Route path="/login" element={<Login setUsername={setUsername}/>} />
      <Route path="/signup" element={<Signup></Signup>} />
      {/* <Route path="/students" element={<Students />} /> */}
      <Route path="/logout" element={<Logout setUsername={setUsername}/>}></Route>
    </Routes>
    </BrowserRouter>
      {/* <Counter></Counter><br></br>
      <b>ToDos:</b>
      <ToDos></ToDos><br></br>
      <Products></Products><br></br>
      <CardProducts></CardProducts><br></br>
      <CardProducts></CardProducts> */}
    </div>
  );
}

export default App;