import React,{useEffect,useState} from "react";
import './style.css'
import {Link} from 'react-router-dom';
const Products=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()
    },[]);
    console.log({products});
    const getProducts=async ()=>{
        try{
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProducts(result.products)
            setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>loading...</h2>
    }
    return(
        <div className="product">
            <h2>List of Products</h2>
            {products.map(item=>(
                <div key={item.id} className="discount">
                    <img src={item.thumbnail} alt={item.title}className="img"/>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                    <Link to={`/Productdetails/${item.id}`}>
                        <button type="submit" className="button">View details</button>
                    </Link>
                    </div>
            ))}
        </div>
    )
}
export default Products;