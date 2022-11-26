import * as express from 'express';
import catRouter from './cats/cats.route';

class Server {
	public app: express.Application;
	constructor() {
		const app = express();
		this.app = app;
	}
	private setRoute() {
		this.app.use(catRouter);
	}
	private setMiddleware() {
		this.app.use(express.json());
		this.setRoute();
		this.app.use((req, res) => {
			res.send({ error: '404 NOT FOUND' });
		});
	}
	public listen(port: number) {
		this.setMiddleware();
		this.app.listen(port, () => {
			console.log(`server is running on PORT:${port}`);
		});
	}
}

function init() {
	const server = new Server();
	server.listen(3000);
}

init();
