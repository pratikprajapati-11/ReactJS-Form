//update a single product
import React, { useState } from "react";

const First = () => {

    const [product,setProduct] = useState({
        name:'Sample Product',
        price:'100',
        description:'Greate'
    })

    // Cloning State: { ...product } creates a shallow copy of the product object.
    const [updated,setUpdated] = useState({...product});

    // console.log("product",product);

    const handleChange = (e) =>{
        const {name,value} = e.target
        setUpdated({...updated,[name]:value})
    }
    // console.log("updated",updated);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProduct(updated);
     alert('Product updated successfully!');
    }
return(
    <>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={updated.name} onChange={handleChange} />
        <br />
        <input type="text" name="price" value={updated.price} onChange={handleChange} />
        <br />
        <input type="text" name="description" value={updated.description} onChange={handleChange} />
        <button type="submit">Update Product</button>
        </form>
    </div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <p>{product.description}</p>
    </>
)
}

export default First;

