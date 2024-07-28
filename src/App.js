//register and login with reactjs and nodejs
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLogin, setIsLogin] = useState(true);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
//         try {
//             const res = await axios.post(endpoint, { username, password });
//             console.log(res.data);
//         } catch (err) {
//             console.error(err.response.data);
//         }
//     };

//     return (
//         <div>
//             <h2>{isLogin ? 'Login' : 'Register'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             </form>
//             <button onClick={() => setIsLogin(!isLogin)}>
//                 {isLogin ? 'Switch to Register' : 'Switch to Login'}
//             </button>
//         </div>
//     );
// }

// export default App;






//crud operation,update with static value,search functionality
import React, { useState } from "react";
import First from "./Components/First";
import Second from "./Components/Second";

const App = () => {

    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ id: '', name: '', price: '' });
    const [filter, setFilter] = useState('');
    // const [data, setData] = useState('');

    console.log("products", products);
    console.log("newProducts", newProduct);
    console.log("filter", filter);
    // console.log("data",data);

    // const handleSubmit = (e) =>{
    //     e.prevetDefault();
    //     console.log("data",data);
    // }


    const addProduct = (product) => {
        setProducts([...products, product]);
    }


    const handleInputChange = (e) => {
        // e.prevetDefault();
        // const name = e.target.name;
        // const value = e.target.value;
        // console.log("name",name);
        // console.log("value",value);

        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value })
    }

    const handleSubmit = () => {
        addProduct(newProduct)
        setNewProduct({ id: '', name: '', price: '' })
    }

    const filtereProducts = (searchTerm) => {
        setFilter(searchTerm);
    }

    //search logic
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    )

    //remove item from the list
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    //update product
    const updateProduct = (updated) => {
        setProducts(
            products.map(product => (
                product.id == updated.id ? updated : product
            ))
        )
    }

    return (
        <>
            <div>
                <h1>Product List Component</h1>
                {/* <div>
                    <input type="text" name="id" value={data} onChange={(e) => setData(e.target.value)} />
                    <button onSubmit={handleSubmit}>Submit</button>
                </div> */}

                <div>
                    <input type="text" name="id" value={newProduct.id} onChange={handleInputChange} />
                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
                    <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>

                <div>
                    <input type="text" placeholder="Search Products" onChange={(e) => filtereProducts(e.target.value)} />
                </div>

                <ul>
                    {
                        filteredProducts.map(product => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                                <button onClick={() => removeProduct(product.id)}>Delete</button>
                                <button onClick={() => updateProduct({ ...product, name: 'Updated Product', price: '600' })}>Update</button>
                            </li>
                        ))
                    }
                </ul>

                {/* Debug section to print products */}
                <div>
                    <h2>All Products</h2>
                    <pre>{JSON.stringify(products)}</pre>
                </div>
            </div >

            <div>
                <First />
            </div>

            <div>
                <Second />
            </div>

        </>
    );
}

export default App