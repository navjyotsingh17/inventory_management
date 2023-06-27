import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';


const Navbar = () => {

  // config();
  // const onSignOut = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/api/logout', {
  //       method: 'POST',
  //       credentials: 'include'
  //     });

  //     if (response.ok) {
  //       window.location.href = '/';
  //     } else {
  //       console.log('Logout failed:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  // const onSignOut=()=>{
  //   setTimeout(() => {
  //     message.success('Sign out Successfull !!!!');
  //   }, 10);
  // }

  

  const onSignOut = () => {
    Swal.fire({
      icon: 'success',
      text: 'Sign out successful !!!!',
      showConfirmButton: false,
      timer: 1500
    });
  };


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to={'/home'} class="navbar-brand" href="#">Inventory Management System</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={'/manage_items'} class="nav-link active" href="#">Manage Items</Link>
              </li>
              <li class="nav-item">
                <Link to={'/add_item'} class="nav-link active" href="#">Add Item</Link>
              </li>
              <li class="nav-item">
                <Link to={'/'} class="nav-link active" href="#" onClick={onSignOut}>Sign Out</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
  
}

export default Navbar;