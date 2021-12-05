import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    // set form items to state for tracking
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    // handler for the form submission
    const onSubmitHandler = (e) => {
        // prevent default submit page reload
        e.preventDefault();
        // make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            // Using shortcut syntax for these objects
            title,  
            price, 
            description
        })
            .then((res)=>console.log(res))
            // may want to later set up to change the res.status on error
            // .catch((err) => res.status(400).json({ errMessage: err }));
            .catch((err)=>console.log(err))
    }


    return(
        <div>
            <h1>Enter New Product</h1>
        {/* // onChange to update firstName and lastName */}
        <form className="productForm" onSubmit={onSubmitHandler}>
            <div className="formBlock">
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="formBlock">
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="formBlock">
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <input className="submitButtons" type="submit"/>
        </form>
        </div>
    )

}

export default ProductForm;