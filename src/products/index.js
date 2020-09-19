import React, {useState,useEffect} from 'react';
import Product from '../product'
import db from '../firebaseConfig'
import * as bootstrap from 'react-bootstrap';

const Products = () => {


    const [products, setProducts] = useState([])

    const productLoop = () => {
        return products.map((product, index)=>{
           return <bootstrap.Col><Product key={index} name={product.name} price={product.price} description={product.description}
           image={product.image} stock={product.stock} likes={product.numLikes} /></bootstrap.Col> 
        })
    }
    
    const fetchData = async () =>{
        const productsResponse= await db.collection('products').get()
        const productsData = productsResponse.docs.map(product=>product.data())
        setProducts(productsData)
    }
    
    useEffect(()=>{
        fetchData()
      },[])
    return( 
    <bootstrap.Row>
        {productLoop()}
    </bootstrap.Row>
    )
}
export default Products


