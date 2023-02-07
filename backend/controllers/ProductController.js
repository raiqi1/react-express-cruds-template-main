import Product from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const saveProduct = await product.save();
        res.status(201).json(saveProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
}

export const deleteProduct = async (req, res) => {
    try {
        const eraseProduct = await Product.deleteOne({_id:req.params.id});
        res.status(200).json(eraseProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}