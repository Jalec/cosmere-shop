import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0
    });

    const [itemsAmount, setItemAmount] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(null);

    const addToTotal = () => {
        setItemAmount((prev) => prev + 1);
    }
    const removeToTotal = () => {
        setItemAmount((prev) => prev - 1);
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        addToTotal();
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        removeToTotal();
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + newAmount }))
    }

    const removeCartItemCount = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0 }))
    }

    const getInfoProduct = (itemId) => {
        let infoItem = PRODUCTS.find((product) => product.id == itemId);
        return infoItem;
    }

    const resetShop = () => {
        setFilteredProducts(null);
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, removeCartItemCount, getTotalCartAmount, getInfoProduct, itemsAmount, setItemAmount, filteredProducts, setFilteredProducts, resetShop }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}