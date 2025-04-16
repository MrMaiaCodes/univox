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

app.post("/room", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { id, roomName,
            chantGiver,
            chantSayers,
            creationDate,
            expirationDate } = body;
        await putItemOnDB(id, roomName,
            chantGiver,
            chantSayers,
            creationDate,
            expirationDate
        )
        res.send({
            "success": true,
            "error": []
        })
    } catch (e) {
        res.status(500).json({ "error": e });
    }
});

app.delete("/room/:id", async (req: Request, res: Response) => {
    try {
        const params = req.params || { id: 0 };
        const stringId = params.id;
        const id = parseInt(stringId);

        await popFromDB(id);
        res.send({
            "success": true,
            "error": []
        })
    } catch (e) {
        res.status(404).json({ "error": e });
    }

});

app.listen(port, () => { console.log("running") });