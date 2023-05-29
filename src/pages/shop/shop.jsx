import React from "react";
import { PRODUCTS } from '../../products';
import { Product } from './product';



export const Shop = () => {
    return (
        <div>
            <div className="pt-12 pb-12 2xl:px-64 xl:px-40 md:px-36 px-12">
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center content-center gap-7">
                    {PRODUCTS.map((product) => (
                       <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </div>

    );
}