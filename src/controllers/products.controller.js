import * as Model from "../models/products.model.js";


export const getAllProducts = async (req, res) => {
    const { category } = req.query;
    //const dbProducts = await Model.getAllProducts();

    if (category) {
      //const productF = dbProducts.filter((item) => item.categories.includes(category));
      const productsF = await Model.getProductsByCategory(category)
      console.log(productsF.length)
      return res.json(productsF);
    }
    const dbProducts = await Model.getAllProducts()
    res.json(dbProducts)
}


export const productsSearch = (req,res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({error: "El nombre es requerido"})
  }
  const arProducts = Model.getAllProducts();

  const productsF = arProducts.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
  if (productsF.length == 0) {
    return res.status(404).json({error: "No se encontraron productos"})
  }
  res.json(productsF)
}


export const getProductById = async (req, res) => {
  const id = req.params.id

  const product = await Model.getProductById(id)
  if (!product) {
    res.status(404).json({error: "No se encontró el producto"})
  }
  res.json(product)
} 

export const createProduct = async (req, res) => {
  const { name, price, stock, categories } = req.body 
  const product = await Model.createProduct({name, price, stock, categories})
  res.status(201).json(product)

}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, price, stock, categories } = req.body

  if (!name || !price || !categories) {
    return res
      .status(422)
      .json({ error: "Nombre, precio, stock  y categorías son requeridos"})
  }
  const productUpd = await Model.updateProduct(id, { name, price, stock, categories })
  if (!productUpd) {
      res.status(404).json({error: "Producto no encontrado para modificar"})
  }
  res.json(productUpd)
}

export const patchProduct = async (req, res) => {
  const { id } = req.params
  const oData = {}
  if (req.body.name !== undefined) oData.name = req.body.name
  if (req.body.price !== undefined) oData.price = req.body.price
  if (req.body.stock !== undefined) oData.stock = req.body.stock
  if (req.body.categories !== undefined) oData.categories = req.body.categories

  if (Object.keys(oData).length === 0) {
    return res
      .status(422)
      .json({ error: "Nombre, precio, stock o categorías son requeridos"})
  }

  const productUpd = await Model.patchProduct(id, oData)
  if (!productUpd) {
      res.status(404).json({error: "Producto no encontrado para modificar"})
  }
  res.json(productUpd)
}


export const deleteProduct = async (req, res) => {
  const {id} = req.params

  const productDel = await Model.deleteProduct(id)
  if (!productDel) {
    res.status(404).json({error: "Producto no encontrado para eliminar"})
  }
  res.status(204).send()
} 

