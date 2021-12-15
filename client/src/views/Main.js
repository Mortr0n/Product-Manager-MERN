import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [ products, setProducts ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    // getting the products and setting the state as an array
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                // loaded state to make sure it doesn't try to display 
                // before it's retrieved the products
                setLoaded(true);
            })
            .catch((err) => console.log(err.response.data));
    }, [])
    // Removing the item from the frontend after a delete action
    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    } 
    // create product code then add it to the products array
    const createProduct = product => {
        axios.post(`http://localhost:8000/api/products`, product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            { loaded && <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}  /> }
        </div>
    )
}
export default Main;