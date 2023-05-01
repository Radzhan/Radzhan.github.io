import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	amount: {
		type: String,
		required: true,
		min: 1,
	},
	result: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		required: true,
	}
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
