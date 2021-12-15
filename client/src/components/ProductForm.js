import React, { useState } from 'react';

const ProductForm = (props) => {
    // state and props notice the onSubmit coming from Main for creating products
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [ title, setTitle ] = useState(initialTitle);
    const [ price, setPrice ] = useState(initialPrice);
    const [ description, setDescription ] = useState(initialDescription);

    // handler for the form submission
    const onSubmitHandler = (e) => {
        // prevent default submit page reload
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return(
        <div>
            <h1>Enter New Product</h1>
        {/* // onChange to update firstName and lastName and description*/}
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
            <input className="submitButtons" type="submit"/>
        </form>
        </div>
    )
}

export default ProductForm;