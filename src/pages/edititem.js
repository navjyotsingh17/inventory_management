import React, { useEffect, useState } from 'react'
import ItemService from '../service/item-service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Edit_item = () => {
    const [item, setItem] = useState({
        id:"",
        name: "",
        price: "",
        quantity: "",
        unit: ""
    });

    document.title="InventoryManagement | Edit Item";

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        ItemService
            .getItemById(id)
            .then((res) => {
                setItem(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[id]);


    const handleChange = (e) => {
        const value = e.target.value;
        setItem({ ...item, [e.target.name]: value });
    };

    const ItemUpdate = (e) => {
        e.preventDefault();
        console.log(item);

        ItemService
            .updateItem(item)
            .then((res) => {
                console.log("Item updated successufully");
                Swal.fire({
                    icon: 'success',
                    title: 'Item Updated Successfully',
                    timer: 1500,
                    showConfirmButton: false
                });
                navigate("/manage_items");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
        
            <div className="container mt-3">
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className='card-header fs-3 text-center'>Edit Item</div>
                            <div className='card-body'>
                                <form onSubmit={(e) => ItemUpdate(e)}>
                                    <div className='mb-3'>
                                        <label>Enter Item Name</label>
                                        <input
                                            type="text"
                                            name='name'
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={item.name}
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label>Enter Quantity</label>
                                        <input
                                            type="text"
                                            name='quantity'
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
                                            className='form-control'
                                            onChange={(e) => handleChange(e)}
                                            value={item.price}
                                        />
                                    </div>
                                    <button className='btn btn-success col-md-12'>Update Item</button>
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

export default Edit_item;
