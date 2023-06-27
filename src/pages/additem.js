import React, { useState } from 'react'
import itemService from '../service/item-service';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const Add_item = () => {
    const [item, setItem] = useState({
      name: "",
      price: "",
      quantity: "",
      unit: ""
  });
  
  document.title="InventoryManagement | Add Item";


  const handleChange=(e)=>{
    const value = e.target.value;
    setItem({ ...item ,[e.target.name]: value });
  };
  
 const ItemRegister=(e)=>
 {
  e.preventDefault();
  console.log(item);

  itemService
  .createItem(item)
  .then((res)=>{
    console.log("Item Added successufully");
    Swal.fire({
      icon: "success",
      title: item.name+ " added successfully",
      timer: 1500,
      showConfirmButton: false
    });
    setItem({
      name: "",
      price: "",
      quantity: "",
      unit: ""
    });
  })
  .catch((error)=>{
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  });
 };
  
  
  return (
    <>
    <div className="container mt-3">
    <div className='row'>
    <div className='col-md-6 offset-md-3'>
     <div className='card'>
     <div className='card-header fs-3 text-center'>Add a item in your inventory</div>
        <div className='card-body'>
            <form onSubmit={(e) => ItemRegister (e)}>
                <div className='mb-3'>
                    <label>Enter Item Name</label>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder="Enter name"
                    className='form-control'
                    onChange={(e)=> handleChange(e)}
                    value={item.name}
                    />
                 </div>

                <div className='mb-3'>
                  <label>Enter Quantity</label>
                  <input
                    type="text"
                    name='quantity'
                    placeholder="Enter quantity"
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                    value={item.quantity}
                  />
                </div>

                <div className='mb-3'>
                  <label>Enter Unit</label>
                  <input
                    type="text"
                    name='unit'
                    placeholder="Enter unit"
                    className='form-control'
                      onChange={(e) => handleChange(e)}
                      value={item.unit}
                  />
                </div>

                <div className='mb-3'>
                  <label>Enter Price</label>
                  <input
                    type="text"
                    name='price'
                    placeholder="Enter price"
                    className='form-control'
                      onChange={(e) => handleChange(e)}
                      value={item.price}
                  />
                </div>

                  <button className='btn btn-success col-md-12' onClick={ItemRegister}>Submit</button>
                 
            </form>
           
        </div>
             
     </div>
            
    </div>
          
    </div>
        <Link to='/manage_items' className=' btn btn-dark col-md-1'>Back</Link>  
    </div>
     
    </>
  )
}

export default Add_item;
