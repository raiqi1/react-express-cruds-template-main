import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  // const { id } = useParams();
  const location = useLocation();
  // console.log(location)
  const productId = location.pathname.split('/')[2];
  console.log(productId);

  useEffect(() => {
    const editProduct = async () => {
      const response = await axios.get(`http://localhost:5000/product/`+productId); 
      setName(response.data.name);
      setPrice(response.data.price);
      setStock(response.data.stock);
    }
    editProduct()
  },[productId])

    

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/product/`+productId, {
        name,
        price,
        stock,
      });
      history.push("/");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={updateProduct}>
          <Input
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="price"
            type="Number"
            placeholder="Harga Produk..."
            label="Harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            name="Stock"
            type="Number"
            placeholder="Stock Produk..."
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <Input name="status" type="checkbox" label="Active" checked />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
