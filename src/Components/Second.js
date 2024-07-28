//task - Develop a reactjs form in which we are able to add,read and update a single product
import React, { useEffect, useState } from "react";

const Second = () => {
    const [products, setProducts] = useState([]);
    const [currentProduct,setCurrentProduct] = useState(null);
    console.log("products", products);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    useEffect(()=>{
        if(currentProduct){
            setName(currentProduct.name);
            setPrice(currentProduct.price)
        }else{
            setName('');
            setPrice('')
        }
    },[currentProduct])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name", name);
        console.log("price", price);
        if(currentProduct){
            updateProduct({name,price,id:currentProduct.id});
        }else{
        if (name != '' && price != '') {
            addProduct({ name, price });
        }
    }
    }

    const updateProduct = (updatedProduct) =>{
        console.log("updatedProduct",updatedProduct);
      setProducts(products.map((product)=>
        product.id == updatedProduct.id ? updatedProduct : product
       ))
       setCurrentProduct(null);
    }

    const addProduct = (product) => {
        console.log("product", product);
        setProducts([...products, { ...product, id: Date.now() }]);
        setName('');
        setPrice('');
    }

    const editProduct = (product) =>{
       setCurrentProduct(product);
       console.log("Current Product",product);
    }
    // console.log("Current Product",currentProduct);

    const deleteProduct = (id) =>{
        setProducts(products.filter((product) => product.id !== id));
    }

    return (
        <>
            <h1>Update Product On Button Click</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            <div>
                {
                    products.map((product)=>(
                        <>
                        <ul>
                            <li>
                                {product.name} - {product.price}
                                <button onClick={()=>editProduct(product)}>Update</button>
                                <button onClick={()=>deleteProduct(product.id)}>Delete</button>

                            </li> 
                        </ul>
                        
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Second