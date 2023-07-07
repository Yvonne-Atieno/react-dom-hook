import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const Productdetails =() =>{
    const {productId} = useParams();
    const[product, setProducts] =useState(null);

    useEffect(()=>{
        const getdetails =async () =>{
          try{
            const response =await fetch(`https://dummyjson.com/products/${productId}`);
            const data =await response.json();
            setProducts(data);
          } catch (error) {
            console.error(error);
          }
        };
        getdetails();
    },[productId]);
    if (!product) {
        return <p>Loading ...</p>;
    }
    return (
        <div>
            <h1>Product details</h1>
            <div>
                <img src ={product.thumbnail} alt={product.title} />y
                
                <h2>{product.tittle}</h2>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <h4>{product.rating}</h4>
            </div>
        </div>
    );
};

export default Productdetails;
    

