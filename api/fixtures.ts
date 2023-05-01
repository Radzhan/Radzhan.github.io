import {randomUUID} from 'crypto';
import mongoose from 'mongoose';
import config from './config';
import User from './model/User';
import Product from './model/Product';

const run = async () => {
	await mongoose.connect(config.db);
	const db = mongoose.connection;

	try {
		await db.dropCollection('products');
		await db.dropCollection('users');
	} catch (e) {
		console.log('Collections were not present, skipping drop...');
	}

	await User.create(
		{
			username: 'Doe',
			password: '1234',
			displayName: 'pupkin',
			phone: +996555555555,
			token: randomUUID(),
		},
		{
			username: 'Vasy',
			password: '4321',
			displayName: 'nagibator',
			phone: +996550123123,
			token: randomUUID(),
		}
	);

	await Product.create(
		{
			name: 'iphone 12 1кг',
			displayName: 'phone',
			price: '950',
			amount: '1',
			result: '950',
		},
		{
			name: 'iphone 13 1кг',
			price: '1050',
			displayName: 'iphone',
			amount: '1',
			result: '1050',
		},
		{
			name: 'samsung 1кг',
			displayName: 'samsung',
			price: '850',
			amount: '1',
			result: '850',
		},
		{
			name: 'Lamborgini car 3000кг',
			displayName: 'Lamborgini',
			price: '120000',
			amount: '1',
			result: '120000',
		},
		{
			name: 'cups with good quality 2кг',
			displayName: 'cup',
			price: '150',
			amount: '3',
			result: '450',
		},
		{
			name: 'metal spoon 1кг',
			displayName: 'spoon',
			price: '50',
			amount: '10',
			result: '500',
		},
		{
			name: 'also metal fork 1кг',
			displayName: 'fork',
			price: '50',
			amount: '10',
			result: '500',
		},
		{
			name: 'iphone 14кг',
			displayName: 'phone',
			price: '2050',
			amount: '1',
			result: '2050',
		},
		{
			name: 'cotton t-short 1кг',
			displayName: 't-short',
			price: '100',
			amount: '2',
			result: '200'
		}
	);

	await db.close();
};

run().catch(console.error);
