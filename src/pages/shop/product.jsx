import React, { useContext } from "react";
import './product.css';
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p> ${price}</p>
            </div>
            <button className="addCartBtn" onClick={() => addToCart(id)}> 
                Add to Cart  {cartItemAmount > 0 && <> ({cartItemAmount}) </> }
            </button>
        </div>
    )
}