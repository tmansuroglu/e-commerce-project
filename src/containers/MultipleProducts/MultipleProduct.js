import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard'
import db from '../../firebaseConfig'
import * as bootstrap from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SingleProductPage from "../SingleProductPage/SingleProductPage"


const Products = ({ match, products, setProducts, id, setId }) => {

    const likeProduct = () => {
        console.log("Product like")
    }

    const productDetails = (e) => {
        setId("1")
        console.log(id)
        // producttan id yi çıkarıp, id stateini değiştirip sonrasında  redirect yapmamız lazım
        //https://miro.medium.com/max/1000/1*k5cFNuvc2IDcg5BnrvWJGw.png 
        // single product page props ayarlanmadı
    }


    const addToCart = () => {
        console.log("Product is added to cart")
    }

    const productLister = () => {
        return products.map((product, index) => {
            return <bootstrap.Col>
                {/* <Link key={index} to={`/products/${index}`}> */}
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    stock={product.stock}
                    likeProduct={likeProduct}
                    details={productDetails}
                    addToCart={addToCart}
                    numLike={product.numLike}
                    id={product.id} />
                {/* </Link> */}
            </bootstrap.Col>
        })
    }

    const fetchProductData = async () => {
        const productsResponse = await db.collection('products').get()
        const productsData = productsResponse.docs.map(product => product.data())
        setProducts(productsData)
    }

    useEffect(() => {
        fetchProductData()
    }, [])
    return (
        <div>
            <bootstrap.Row>
                {productLister()}
            </bootstrap.Row>
            {/* <Route exact path={match.url} render={() => <h3>Chose a product</h3>} />
            <Route path={`${match.url}/:productId`} render={routerProps => <SingleProductPage {...routerProps} />} /> */}

        </div>
    )
}
export default Products


