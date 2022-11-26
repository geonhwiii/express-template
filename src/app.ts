import * as express from "express";

const app = express();
const port: number = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({
    result: { name: "Dan", message: "Hello!", age: 29 },
    error: null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
