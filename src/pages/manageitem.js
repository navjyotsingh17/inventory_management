import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ItemService from '../service/item-service';




const Home = () =>
{

    document.title="InventoryManagement | Manage Items";

    const searchByName = () => {

        let filter = document.getElementById("myInput").value.toUpperCase();

        let myTable = document.getElementById("myTable");

        let tr = myTable.getElementsByTagName("tr");

        
            for (var i = 0; i < tr.length; i++){
                let td = tr[i].getElementsByTagName("td")[1];

                if (td) {
                    let textValue = td.textContent || td.innerHTML;

                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "None";
                    }
                }
            }
    
    }

    const searchById = () => {

        let filter = document.getElementById("myint").value;

        let myTable = document.getElementById("myTable");

        let tr = myTable.getElementsByTagName("tr");


        for (var i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[0];

            if (td) {
                let textValue = td.textContent || td.innerHTML;

                if (textValue.indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "None";
                }
            }
        }

    }


  
 const [ItemList, setItemList]= useState([]);

    useEffect(()=>{
    init();
    },[]);

    const init=()=>{
        ItemService.getAllItems().then((res) => {
            console.log(res.data);
            setItemList(res.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    // const deleteItem=(id)=>{
    //     const confirmed = window.confirm("Are you sure you want to delete this item?");
        
    //     if (confirmed) {
    //   ItemService
    //     .deleteItemById(id)
    //     .then((res)=>{
    //         setTimeout(() => {
    //             message.success('Item Deleted Successfully');
    //         }, 10);
    //         init();
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     });
    //     };

    // }

    const deleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                ItemService.deleteItemById(id)
                    .then(() => {
                        ItemService.getAllItems();
                        Swal.fire({
                           title: 'Deleted!',
                            text: 'Item has been deleted.',
                            icon: 'success',
                             timer: 1500,
                            showConfirmButton: false
                    })
                        init();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };







    return(
        
        <div className='container mt-3'>
            <input class="form-control me-2 mb-4" type="string" placeholder="Search by item name" aria-label="Search" id='myInput' onKeyUp={searchByName} />
            <input class="form-control me-2 mb-4" type="number" placeholder="Search by item id" aria-label="Search" id='myint' onKeyUp={searchById} />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                    <div className='card-header fs-3 text-center'>
                        List of all the items present in your inventory
                    </div>
                        <div className='card-body'>
                            <table class="table table-hover text-center" id='myTable'>
                                <thead>
                                 <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit</th>
                                        <th scope="col">Price per quantity</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ItemList.map((i) => (

                                        <tr>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.quantity}</td>
                                            <td>{i.unit}</td>
                                            <td>{i.price}</td>
                                            <td>
                                                <Link to={'edit_item/'+i.id} className="btn btn-sm btn-success me-3">Edit</Link>
                                                <button onClick={() => deleteItem(i.id)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                    }  
                                </tbody>
                            </table>
                            
                        </div>
                        
                    </div>
                     
                </div>  
                
            </div>
            <Link to='/home' className=' btn btn-dark col-md-1'>Back</Link>
        </div>
    );
};


export default Home;
