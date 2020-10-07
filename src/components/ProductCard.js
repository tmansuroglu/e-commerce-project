import React from 'react';
import * as bootstrap from 'react-bootstrap';


const ProductCard = (props) => {

    return (
        <bootstrap.Card style={{ width: '20rem' }} className="mx-auto">
            <bootstrap.Card.Img variant="top" height="303" src={props.image} />
            <bootstrap.Card.Body>
                <bootstrap.Card.Title>{props.name}</bootstrap.Card.Title>
                <bootstrap.Card.Text>Description: {props.description}<br />Stock: {props.stock}<br />
                Likes: {props.numLike} <br />
                Price: {props.price} <br />
                id : {props.id}
                </bootstrap.Card.Text>
                <div>
                    <bootstrap.Button onClick={props.likeProduct}>Like</bootstrap.Button>
                    <bootstrap.Button onClick={props.addToCart} disabled>Add to Cart</bootstrap.Button>
                    <bootstrap.Button onClick={props.details} >Details</bootstrap.Button>
                </div>
            </bootstrap.Card.Body>
        </bootstrap.Card>
    )
}
export default ProductCard