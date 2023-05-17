import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './cart.css';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { removeFromCart, addToCart, cartItems, updateCartItemCount } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="cartItem">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p> ${price}</p>
                <div className="countHandler">
                    <button onClick={() => {removeFromCart(id)}}> - </button>
                    <input value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => {addToCart(id)}}> + </button>
                </div>
            </div>
        </div>
    );
}