import * as express from 'express';
import catRouter from './cats/cats.route';

const app: express.Express = express();
const port: number = 8000;

/* JSON middleware  */
app.use(express.json());
app.use(catRouter);

/* NOT FOUND */
app.use((req, res) => {
	res.send({ error: '404 NOT FOUND' });
});

app.listen(port, () => {
	console.log(`server is running on PORT:${port}`);
});
