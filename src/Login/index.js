import React,{ useState} from "react";
import './style.css'
import {Link} from 'react-router-dom';
const Login=()=>{
    const [username,setUserName]=useState('');
    const [password,setUserPassword]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const data={
            username:username,
            password:password
        }
        try{
            const response= await fetch('https://dummyjson.com/auth/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            const result= await response.json()
            console.log({result});
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text"
                onChange={(e)=>{setUserName(e.target.value)}}/>
                <br/>
                <br/>
                <input placeholder="Enter password" type="password"
                onChange={(e)=>{setUserPassword(e.target.value)}}/>
                <br/>
                <br/>
               
               <Link to={`/product`}><button type="submit" className="button">Login</button></Link>
            </form>
        </div>
    )
}
export default Login;

