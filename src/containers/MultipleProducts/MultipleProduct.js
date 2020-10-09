import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard'
import db from '../../firebaseConfig'
import * as bootstrap from 'react-bootstrap';



const Products = ({ match, products, setProducts, id, setId }) => {

    const likeProduct = () => {
        console.log("Product like")
    }




    const addToCart = () => {
        console.log("Product is added to cart")
    }

    const productLister = () => {
        return products.map((product, index) => {
            return <bootstrap.Col>

                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    stock={product.stock}
                    likeProduct={likeProduct}
                    addToCart={addToCart}
                    numLike={product.numLike}
                    id={product.id} />

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


