import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

//* [READ]
router.get('/cats', (req, res) => {
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
});

//* [READ]
router.get('/cats/:id', (req, res) => {
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
});

//* CREATE 새로운 고양이 추가 api -> POST
router.post('/cats', (req, res) => {
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
});

//* [UPDATE]
router.put('/cats/:id', (req, res) => {
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
});

//* [UPDATE]
router.patch('/cats/:id', (req, res) => {
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
});

//* [DELETE]
router.delete('/cats/:id', (req, res) => {
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
});

export default router;
