import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();
const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send({
		result: { message: 'success' },
		error: null,
	});
});

app.get('/cats', (req, res) => {
	res.send({
		result: { cats: Cat },
		error: null,
	});
});

app.use((req, res) => {
	res.send({ error: '404 NOT FOUND' });
});

app.listen(port, () => {
	console.log(`server is running on PORT:${port}`);
});
