import React, { useEffect, useState } from "react";
import axios from 'axios';
import { navigate } from "@reach/router";
import DeleteButton from './DeleteButton';
// may want to set as a view later
const ProductDetail = (props) => {
    const [product, setProduct ] = useState({});
    // getting the product for displaying
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ props.id)
            .then((res)=> setProduct({...res.data}))
    }, [])


    return(
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <DeleteButton productId={product._id} successCallback={() => navigate('/')}/>
        </div>
    )
}

export default ProductDetail;