import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [ products, setProducts ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            <ProductForm />
            <hr/>
            { loaded && <ProductList products={products}/> }
        </div>
    )
}
export default Main;
