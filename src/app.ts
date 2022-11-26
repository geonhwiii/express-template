import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();
const port: number = 8000;

/* JSON middleware  */
app.use(express.json());

/* [READ]: Get All Cats */
app.get('/cats', (req: express.Request, res: express.Response) => {
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
app.get('/cats/:id', (req: express.Request, res: express.Response) => {
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
app.post('/cats', (req: express.Request, res: express.Response) => {
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

/* NOT FOUND */
app.use((req, res) => {
	res.send({ error: '404 NOT FOUND' });
});

app.listen(port, () => {
	console.log(`server is running on PORT:${port}`);
});
