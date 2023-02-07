import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import "./index.scss";

const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const history = useHistory()

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/product", {
        name,
        price,
        stock,
      });
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={addProduct}>
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

export default Tambah;
