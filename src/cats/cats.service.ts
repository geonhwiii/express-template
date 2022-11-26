import type { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

//* [READ]
const readAllCat = (req: Request, res: Response) => {
	try {
		const cats = Cat;
		res.status(200).send({
			success: true,
			data: {
				cats,
			},
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* [READ]
const readOneCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		console.log(params);
		const cat = Cat.find((cat) => {
			return cat.id === params.id;
		});
		res.status(200).send({
			success: true,
			data: {
				cat,
			},
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* CREATE 새로운 고양이 추가 api -> POST
const createOneCat = (req: Request, res: Response) => {
	try {
		const data = req.body;
		Cat.push(data); // create
		res.status(200).send({
			success: true,
			data: { data },
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

const updateOneCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const body = req.body;
		let result = Cat.map((cat) => {
			if (cat.id === params.id) {
				return body;
			}
			return cat;
		});
		res.status(200).send({
			success: true,
			data: {
				cat: result,
			},
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* [UPDATE]
const updateOneCatDetail = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const body = req.body;
		let result = Cat.map((cat) => {
			if (cat.id === params.id) {
				cat = { ...cat, ...body };
			}
			return cat;
		});
		res.status(200).send({
			success: true,
			data: {
				cat: result,
			},
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* [DELETE]
const deleteOneCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const newCat = Cat.filter((cat) => cat.id !== params.id);
		res.status(200).send({
			success: true,
			data: newCat,
		});
	} catch (error: any) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

export const catsService = { readAllCat, readOneCat, createOneCat, updateOneCat, updateOneCatDetail, deleteOneCat };
