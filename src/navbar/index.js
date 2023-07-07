import React from "react";
import './style.css'

const Navbar =()=>{
    return (<nav className="nav">
        <a>PRODUCTS PAGE</a>
        <ul>
            <li className="active">
                <a href="/login">Login</a>
                <a href="/Navbar">Navbar</a>
                <a href="/products">Products</a>
            </li>
        </ul>
    </nav>
    );
}
export default Navbar;