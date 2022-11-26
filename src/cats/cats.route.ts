import { Router } from 'express';
import { Cat } from './cats.model';

const router = Router();

/* [READ]: Get All Cats */
router.get('/cats', (req, res) => {
	try {
		const cats = Cat;
		res.status(200).send({
			result: { data: cats, success: true },
			error: null,
		});
	} catch (error: any) {
		res.status(400).send({ success: false, message: error.message, error: 'SERVER ERROR' });
	}
});

/* [READ]: Get one cat */
router.get('/cats/:id', (req, res) => {
	try {
		const id = req.params.id;
		const cat = Cat.find((item) => item.id === id);
		res.status(200).send({
			result: { data: cat, success: true },
			error: null,
		});
	} catch (error: any) {
		res.status(400).send({ success: false, message: error.message, error: 'SERVER ERROR' });
	}
});

/* [CREATE]: Create a cat */
router.post('/cats', (req, res) => {
	try {
		const body = req.body;
		Cat.push(body);
		res.status(200).send({
			result: { data: body, success: true },
			error: null,
		});
	} catch (error: any) {
		res.status(400).send({ success: false, message: error.message, error: 'SERVER ERROR' });
	}
});

export default router;
