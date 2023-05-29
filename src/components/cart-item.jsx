import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import {Trash} from "phosphor-react";


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { removeFromCart, addToCart, cartItems, updateCartItemCount, setItemAmount } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="flex rounded-lg shadow-lg border p-11 mb-9 gap-6">
            <img className="w-28" src={productImage} alt={productName} />
            <div className="flex gap-32">
                <div className="flex flex-col w-36 gap-5">
                    <Link to={`/product/${id}`}><p className="hover:opacity-50"><b>{productName}</b></p></Link>
                    <p> ${price}</p>
                </div>
                <div className="flex flex-col gap-12 justify-center">
                    <div className="flex items-start border-gray-100">
                        <button onClick={() => {removeFromCart(id)}} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                        <input value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} className="h-8 w-8 border bg-white text-center text-xs outline-none"/>
                        <button onClick={() => {addToCart(id)}} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="rounded-full p-1 hover:opacity-25" onClick={() => {
                            updateCartItemCount(0, id);
                            setItemAmount(prev => prev - cartItemAmount)
                        }}>
                            <Trash size={32}/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}