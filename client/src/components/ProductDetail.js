import React, { useEffect, useState } from "react";
import axios from 'axios';
import { navigate } from "@reach/router";

const ProductDetail = (props) => {
    const [product, setProduct ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ props.id)
            .then((res)=> setProduct({...res.data}))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                navigate('/products');
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            <button onClick={() => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default ProductDetail;