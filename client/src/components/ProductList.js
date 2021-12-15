import React, { useEffect } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { products, removeFromDom, id } = props;
    // creating a delete button to use throughout.  May want to move to main
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                removeFromDom(id);
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="productForm">
            {/* mapping through the products array to display them all */}
            {products.map((product) => {
                return (
                    <div key={product._id} className="listBlocks">
                        <p><span className="listItems"><Link to={`/products/${product._id}`}> 
                        {product.title}: ${product.price} </Link></span></p>
                        {/* Edit and Delete button per item */}
                        <DeleteButton productId={product._id} successCallback={() =>removeFromDom(product._id)} />
                        <Link className='btn btn-info ms-2 mb-2' to={`/products/edit/${product._id}`}>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;