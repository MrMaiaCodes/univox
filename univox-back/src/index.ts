import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import login from "../service/login";

dotenv.config();

const app: Express = express();
const port=process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => 
    {
        const loginResponse = login(req);
        res.send(loginResponse)
    });

app.listen(port, () => {console.log("running")});