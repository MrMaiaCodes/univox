import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { login } from "./service/login";
import { getItemFromDB, putItemOnDB, popFromDB } from "./db/dbOperation/dbService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("it worked!");
});

app.get("/get/:id", async (req: Request, res: Response) => {
    try {
        const params = req.params || { id: 1 };
        const parameter = params.id;
        console.log(parameter);

        const itemFromDB = await getItemFromDB(parseInt(parameter));

        const loginResponse = login(req);
        const response = {
            ...loginResponse,
            item: itemFromDB
        }
        res.send(response)
    } catch (e) {
        res.status(404).json({ "error": e });
    }

});

app.post("/item", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { id, name, alive } = body;
        await putItemOnDB(id, name, alive)
        res.send({
            "success": true,
            "error": []
        })
    } catch(e) {
        
    }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
    const params = req.params || { id: 0 };
    const stringId = params.id;
    const id = parseInt(stringId);

    await popFromDB(id);
    res.send({
        "success": true,
        "error": []
    })
});

app.listen(port, () => { console.log("running") });