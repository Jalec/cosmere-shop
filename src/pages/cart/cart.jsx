import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "../../components/cart-item";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-center items-center mt-10 2xl:gap-20 xl:gap-8 font-poppins">
            <div className="text-blue-700 text-4xl font-extrabold font-poppins">
                <h1>Your Cart</h1>
            </div>
            <div className="flex xl:flex-row xl:items-start flex-col items-center mb-11 gap-10">
                <div className="">
                    {PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0) {
                            return <CartItem key={product.id} data={product}/>;                            
                        } else { return null }
                    })}
                </div>
                { getTotalCartAmount() > 0 ? (
                        <div className="rounded-lg border shadow-md h-80 w-80 sm:w-96 p-11">
                            <div className="mb-2 flex flex-col">
                                <p className="text-gray-700 flex justify-between"><span>Subtotal:</span><span>${getTotalCartAmount()}</span></p>
                                <p className="text-gray-700 flex justify-between"><span>Shipping:</span><span>$0</span></p>
                            </div>

                            <hr className="my-4" />

                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                  <p className="mb-1 text-lg font-bold"> ${getTotalCartAmount()}</p>
                                  
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                                <button className="border border-blue-950 rounded-md py-1.5 duration-300 hover:bg-blue-950 hover:text-white" onClick={() => navigate("/")}> Continue Shopping </button>
                            </div>                            
                        </div>
                              
                    ) : 
                    ( 
                        <div className="flex flex-col gap-11 justify-center items-center mt-20">
                            <h1 className="text-3xl"> Your Cart is Empty :( </h1>
                            <img className="w-24" src="/bridge4.png" alt="" />
                            <Link to={'/'} className="flex justify-center items-center gap-4 border-2 border-blue-950 text-center text-xl py-2 w-80 font-poppins font-bold rounded-md duration-300 hover:bg-blue-950 hover:text-white"><ArrowLeft /> Back To All Products</Link>
                        </div> 
                    )
                }
            </div>
        </div>
    );
}