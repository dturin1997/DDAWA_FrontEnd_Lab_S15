import { useState, useEffect } from 'react';
import { get } from "./services";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const products = await get('productos');
    setProducts(products);
    console.log(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <h1>List Of Products</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Expiration Date</th>
            <th scope="col">Is New?</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.expirationDate.split("T")[0]}</td>
              <td>{`${product.isNew}`}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default App
