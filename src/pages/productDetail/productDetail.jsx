import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { LongText } from "../../components/longText";

export const ProductDetail = () => {
    const { id } = useParams();
    const { getInfoProduct, cartItems, updateCartItemCount, setItemAmount, addToCart, resetShop } = useContext(ShopContext);
    const [ counter, setCounter ] = useState(1);
    const [ isActivated, setIsActivated ] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const increaseCounter = () => {
        setCounter(prev => prev + 1);
        setIsActivated(true);
    }

    const decreaseCounter = () => {
        if(counter > 0) {
            setCounter(prev => prev - 1);
        }
    }

    let infoItem = getInfoProduct(id);
    const cartItemAmount = cartItems[id];

    return (
        <>
            <div className="absolute top-32 left-10 font-inter text-gray-600">
                <Link to={'/'}><p className="flex gap-1 text-xs hover:opacity-50" onClick={resetShop}><ArrowLeft size={15}/><span className="sm:block hidden">Back to all results</span></p></Link>
            </div>
            <div className="flex justify-center items-start mt-10 lg:mt-16 2xl:mt-24">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 w-3/4 lg:pt-2">
                    <img src={infoItem.productImage} alt="" className="w-56 sm:w-64 md:w-72 2xl:w-96 shadow-xl rounded-md border"/>
                    <div className="flex flex-col items-center lg:items-start justify-center gap-8 2xl:gap-12 w-1/3">
                        <div className="flex flex-col gap-10"> 
                            <div className="flex flex-col gap-4">   
                                <h1 className="text-blue-700 font-extrabold text-center lg:text-left text-xl lg:text-2xl 2xl:text-3xl font-poppins">{infoItem.productName}</h1>
                                <p className="font-semibold text-center lg:text-left text-lg lg:text-xl 2xl:text-2xl font-poppins">${infoItem.price}</p>
                                <LongText text={infoItem.productDesc} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-4 pr-[280px] lg:pr-0">
                            <div className="">
                                <p className="text-gray-500 font-poppins">Qty.</p>
                                <div className="flex items-start border-gray-100">
                                    <button onClick={decreaseCounter} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                                    <input value={counter} readOnly className="h-8 w-8 border bg-white text-center text-xs outline-none"/>
                                    <button onClick={increaseCounter} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                                </div>
                            </div>
                            {
                                isActivated ? (
                                    <button className="col-start-1 col-end-3 text-center bg-slate-800 w-72 sm:w-80 py-2 text-white text-xl rounded-md transition-all duration-300 hover:letter-spacing-3 hover:bg-indigo-400 hover:text-blue-950 hover:shadow-lg active:letter-spacing-3 active:bg-indigo-600 active:text-white active:shadow-none active:translate-y-5 active:transition-100 font-poppins" onClick={() => {
                                        updateCartItemCount(counter, id);
                                        setItemAmount(prev => prev + counter);
                                        setIsActivated(false);
                                        setCounter(1)
                                    }}>Add To Cart</button>
                                ) : (
                                    <button className="col-start-1 col-end-3 text-center bg-slate-800 w-72 sm:w-80 py-2 text-white text-xl rounded-md transition-all duration-300 hover:letter-spacing-3 hover:bg-indigo-400 hover:text-blue-950 hover:shadow-lg active:letter-spacing-3 active:bg-indigo-600 active:text-white active:shadow-none active:translate-y-5 active:transition-100 font-inter" onClick={() => {
                                        addToCart(id);
                                    }}>Add To Cart</button>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}