import React from 'react';

const ProductList = (props) => {
    // const { products } = props;
    return(
        <div className="productForm">
            {props.products.map((product, index) => {
                return (
                    <div key={index} className="listBlocks">
                        <p><span className="listItems">{product.title} :</span> <span className="listItems">${product.price} </span></p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;