import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [ products, setProducts ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ toggler, setToggler ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err.response.data));
    }, [toggler])

    const removeFromDom = (productId) => {
        console.log(products);
        console.log(productId);
        setProducts(products.filter(product => product._id !== productId));
        console.log(products);
    } 

    return (
        <div>
            <ProductForm setToggler={setToggler} toggler={toggler}/>
            <hr/>
            { loaded && <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} setToggler={setToggler} toggler={toggler} /> }
        </div>
    )
}
export default Main;