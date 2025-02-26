import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port=process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => 
    {
        const info = sendInfo(req);
        res.send(info)
    });

function sendInfo(req:Request) {
    return req;
}
app.listen(port, () => {console.log("running")});