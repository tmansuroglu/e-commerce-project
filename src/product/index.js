import React, { useEffect } from 'react';
import * as bootstrap from 'react-bootstrap';


const Product = (props) => {
    const [like, setLike] = React.useState(false);
    const [counter, setCounter] = React.useState(0);
    const [likeText, setLikeText] = React.useState("Like")
    
    /*const likeProduct2 = () => {
         setCounter(prevState => prevState + 1)
    }*/
    
    const likeProduct = (e) => {
        setLike(!like);
        like?setCounter(counter-1):setCounter(counter+1)
        setLikeText(likeText==="Like"?"Dislike":"Like")
    }
    useEffect(()=>{

    })
    const addToCart = (e) => {
//cart func
    }
    return (
        <bootstrap.Card style={{ width: '20rem'}} className="mx-auto">
            <bootstrap.Card.Img variant="top"  height="303" src={props.image} />
            <bootstrap.Card.Body>
                <bootstrap.Card.Title>{props.name}</bootstrap.Card.Title>
                <bootstrap.Card.Text>Description: {props.description}<br/>Stock: {props.stock}<br/>
                Likes: {counter} <br/>
                Price: {props.price}
                </bootstrap.Card.Text>
                <div>
                    <bootstrap.Button onClick={likeProduct}>Like</bootstrap.Button>
                    <bootstrap.Button onClick={addToCart} disabled>Add to Cart</bootstrap.Button> 
                </div>
            </bootstrap.Card.Body>
            
            {/*
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={"img"}></img>
            <p>{props.price}</p>
            <div>Stock: {props.stock}</div>
            <div>Likes: {counter}</div>
            <button onClick={likeProduct}>{likeText}</button>
            <button onClick={addToCart}>Add to Cart</button>*/}
        </bootstrap.Card>

        /**
         * 
         * <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
         */
    )
}
export default Product