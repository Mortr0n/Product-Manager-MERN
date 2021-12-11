import React from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const { products, removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                removeFromDom(productId);
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="productForm">
            {products.map((product, index) => {
                return (
                    <div key={index} className="listBlocks">
                        <p><span className="listItems"><Link to={`/products/${product._id}`}> 
                        {product.title}: ${product.price} </Link></span></p>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;