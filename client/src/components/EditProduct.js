import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';
// May want to set as a view later
const EditProduct = (props) => {
    // set form items to state for tracking
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const { id } = props;
    // getting the product to edit and setting state
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, [])


    // handler for the form submission
    const onSubmitHandler = (e) => {
        // prevent default submit page reload
        e.preventDefault();
        // make a post request to create a new person
        axios.put(`http://localhost:8000/api/products/${id}`, {
            // Using shortcut syntax for these objects
            title,  
            price, 
            description
        })
            .then((res)=>{
                console.log(res);
                navigate('/products');
            })
            .catch((err)=>console.log(err))
    }


    return(
        <div>
            <h1>Edit Product</h1>
        {/* // onChange to update firstName and lastName */}
        <form className="productForm" onSubmit={onSubmitHandler}>
            <div className="formBlock">
                <label>Title</label><br/>
                <input 
                type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="formBlock">
                <label>Price</label><br/>
                <input 
                type="text" 
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="formBlock">
                <label>Description</label><br/>
                <input 
                type="text" 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='mt-2'>
                <input className="btn btn-primary mb-2 me-2" type="submit"/>
                <DeleteButton productId={id} successCallback={()=>navigate('/')}/>
            </div>

        </form>
        </div>
    )

}

export default EditProduct;