import React, { useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const { products, setProducts, removeFromDom, toggler, setToggler, id } = props;

    

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                setProducts(
                    products.filter((product) => {
                        return product._id !== productId;
                    })
                );
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="productForm">
            {products.map((product) => {
                return (
                    <div key={product._id} className="listBlocks">
                        <p><span className="listItems"><Link to={`/products/${product._id}`}> 
                        {product.title}: ${product.price} </Link></span></p>
                        <button onClick={() => {deleteProduct(product._id)}}>Delete</button>
                        <Link  to={`/products/edit/${product._id}`}>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;