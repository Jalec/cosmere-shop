import React, { useContext } from "react";
import './cart.css';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="cartTitle">
                <h1> Your Cart Items</h1>
            </div>
            <div className="cart-checkout">
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0) {
                            return <CartItem key={product.id} data={product}/>;
                        } else { return null }
                    })}
                </div>
                { getTotalCartAmount() > 0 ? (
                    <div className="checkout">
                        
                        <p><b>Subtotal: ${getTotalCartAmount()}</b></p>
                        <button onClick={() => navigate("/")}> Continue Shopping </button>
                        <button> Checkout </button>
                        
                    </div>
                ) : ( <div className="empty-cart"><h1> Your Cart is Empty :( </h1></div> )
                }
            </div>
        </div>
    );
}