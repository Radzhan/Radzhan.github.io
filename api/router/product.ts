import express from "express";
import Product from '../model/Product';

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res, next) => {
	try {
		const result = await Product.find();

		return res.send(result);
	} catch (e) {
		return next(e);
	}
});

export default ProductRouter;
