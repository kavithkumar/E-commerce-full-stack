import { useEffect, useState } from "react";
import { ProductCard } from "./Card";

export function CardProducts(){
    let [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products")
        .then((data)=>data.json())
        .then((result)=>setProducts(result));
    },[]);
    return(
        <>
        <b>Products</b><br></br>
       
        <div className="row">
            {products.map((product)=>(
                <>
                <ProductCard product={product}></ProductCard>
                </>
            ))}
        </div>
        </>
    );
}