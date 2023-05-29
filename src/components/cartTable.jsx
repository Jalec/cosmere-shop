import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart-item";


export const CartTable = () => {
    const { cartItems } = useContext(ShopContext);
    //const cartItemAmount = cartItems[id];
    return (
        <div>
            <table className="mt-10">
                <thead>
                    <tr className="flex justify-center gap-56 border-b-2 border-blue-800">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {PRODUCTS.map((product) => {
                            if(cartItems[product.id] !== 0) {
                                return <CartItem key={product.id} data={product}/>;                            
                            } else { return null }
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}