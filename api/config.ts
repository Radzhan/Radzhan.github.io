import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

const rootPath = __dirname;

const config = {
	rootPath,
	publicPath: path.join(rootPath, "public"),
	db: "mongodb://localhost/Compas",
	google: {
		clientId: process.env.GOOGLE_CLIENT_ID,
	}
};

export default config;