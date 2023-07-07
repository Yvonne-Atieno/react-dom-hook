import React,{useState} from 'react';
import './style.css'
const AddProductForm=()=>{
    const[name,setName]=useState('');
    const[price]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    return(
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text"value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </label>
                <br/>
                <label/>
                Price:
                <input type="text"value={price}/>
                <label/>
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};
export default AddProductForm;