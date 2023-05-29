import React from "react";
//import { PRODUCTS } from '../../products';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

export const ProductDetail = () => {
    const { id } = useParams();
    const { getInfoProduct, cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    
    let infoItem = getInfoProduct(id);
    const cartItemAmount = cartItems[id];

    return (
        <div className="flex justify-center items-start mt-40">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-3/4">
                <img src={infoItem.productImage} alt="" className="w-96 shadow-xl rounded-md border"/>
                <div className="flex flex-col items-start justify-center gap-9 w-1/3">
                    <div className="flex flex-col  gap-10"> 
                        <Link to={'/'} className="flex justify-center items-center gap-4 border-2 border-blue-800 text-center text-xl py-2 w-80 font-poppins font-bold rounded-md duration-300 hover:bg-blue-800 hover:text-white"><ArrowLeft /> Back To All Products</Link>
                        <div className="flex flex-col gap-4">   
                            <h1 className="text-blue-900 font-extrabold text-4xl font-poppins">{infoItem.productName}</h1>
                            <p>Lorem Ipsum</p>
                            <p className="text-blue-900 text-2xl font-semibold">${infoItem.price}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4">
                        <div>
                            <p className="text-gray-500 font-poppins">Qty.</p>
                            <div className="flex items-start border-gray-100">
                                <button onClick={() => {removeFromCart(id)}} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                                <input value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} className="h-8 w-8 border bg-white text-center text-xs outline-none"/>
                                <button onClick={() => {addToCart(id)}} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                            </div>
                        </div>
                        <button className="col-start-1 col-end-3 text-center bg-slate-800 w-80 py-2 text-white text-xl rounded-md transition-all duration-300 hover:letter-spacing-3 hover:bg-indigo-400 hover:text-blue-950 hover:shadow-lg active:letter-spacing-3 active:bg-indigo-600 active:text-white active:shadow-none active:translate-y-5 active:transition-100 font-poppins" onClick={() => addToCart(id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}