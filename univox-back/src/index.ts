import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {login} from "./service/login";
import {getItemFromDB, putItemOnDB} from "./db/db-actions/dbService";

dotenv.config();

const app: Express = express();
const port=process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => 
    {
        res.send("it worked!");
    });

app.get("/get/:id", (req:Request, res:Response) => 
    {
        const params = req.params || {id:1};
        const parameter = params.id;
        console.log(parameter);
        
        const itemFromDB = getItemFromDB(parseInt(parameter));
        
        const loginResponse = login(req);
        const response = {
            ...loginResponse,
            item:itemFromDB
        }
        res.send(response)
    });
    

    /*export function putItemOnDB(id:number, name:string, alive:boolean) {
        //db.items.push({"id":"7"})
        const db = accessDB("user-list");
        db?.items.push({id, name, alive});
      }*/

app.post("/item", (req:Request, res:Response) =>{
    
    const body = req.body;
    const {id, name, alive} = body;
    putItemOnDB(id, name, alive)
    res.send({
        "success":true,
        "error":[]
    })
});

app.listen(port, () => {console.log("running")});