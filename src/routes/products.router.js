import { Router } from "express";

const router = Router();

export default router;

import {
      getAllProducts,
      productsSearch,
      getProductById,
      createProduct,
      deleteProduct,
      updateProduct,
      patchProduct
     } from "../controllers/products.controller.js"
import { verifyToken } from "../middlewares/verify-token.js";

router.get('/products', getAllProducts);
router.get('/products/:id',getProductById)
router.post('/products', verifyToken, createProduct)
router.delete('/products/:id', verifyToken, deleteProduct)
router.put('/products/:id', verifyToken, updateProduct)
router.patch('/products/:id', verifyToken, patchProduct)