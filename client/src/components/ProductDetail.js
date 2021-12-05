import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProductDetail = (props) => {
    const [product, setProduct ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ props.id)
            .then((res)=> setProduct({...res.data}))
    }, [])


    return(
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </div>
    )
}

export default ProductDetail;