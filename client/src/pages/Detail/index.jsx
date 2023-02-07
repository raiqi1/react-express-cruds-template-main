import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './index.scss';

const Detail = () => {

  const[product,setProduct] = useState("");
  const location = useLocation();
  // console.log(location)
  const productId = location.pathname.split('/')[2];
  console.log(productId);

  useEffect(() => {
    const detailProduct = async() =>{
      try {
        const response =  await axios.get("http://localhost:5000/product/"+productId)
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    detailProduct();
  },[productId]);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {product._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {product.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {product.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {product.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;