import React,{useState} from "react";
import { PRODUCTS } from '../../products';
import { Product } from './product';
import { Filter } from '../../components/filter.jsx';
import { SearchBar } from "../../components/searchBar";


export const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState(null)
    const options = ["Filter By","Price", "Name"];

    const handleFilter = (filterOption) => {
        let items;
        if(filterOption === options[1]){
            items = [...PRODUCTS].sort((a, b) => a.price - b.price);
        } else if( filterOption === options[2]){
            items = [...PRODUCTS].sort((a, b) => a.productName.localeCompare(b.productName));
        } else {
            setFilteredProducts(null)
        }
        setFilteredProducts(items)
    }
    
    const handleSearch = (search) => {
        let searchedProducts = [...PRODUCTS].filter((product) => {
            let productName = product.productName.toLowerCase()
            return productName.includes(search.toLowerCase());
        });
        setFilteredProducts(searchedProducts);        
    }

    return (
        <div>
            <div className="sm:flex justify-center mt-12 hidden">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex flex-col pt-12 pb-12 2xl:px-64 xl:px-40 md:px-32 sm:px-32 px-auto">
                <div className="mb-12 flex justify-center">
                    <Filter options={options} onFilterChange={handleFilter} />
                </div>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center content-center gap-7">
                    {!filteredProducts ? (
                        PRODUCTS.map((product) => (
                            <Product key={product.id} data={product} />
                        ))
                    )
                    : (
                        filteredProducts.map((product) => (
                            <Product key={product.id} data={product} />
                        ))
                    )}
                </div>
            </div>
        </div>

    );
}