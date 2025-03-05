import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {login} from "./service/login";

dotenv.config();

//banco de dados
const db = {
    "items": [
        {
            "id":1,
            "name":"Pedro",
            "alive":false
        },
        {
            "id":2,
            "name":"João",
            "alive":true
        },
        {
            "id":3,
            "name":"James",
            "alive":true
        },
        {
            "id":4,
            "name":"Ferrerro",
            "alive":true
        },
        {
            "id":5,
            "name":"Melinda",
            "alive":true
        },
        {
            "id":6,
            "name":"Jackeline",
            "alive":true
        }
    ]
}

function accessDB(dbName:string) {
    if(dbName=="user-list") return db
}

function getItemFromDB(id:number) {
    const db = accessDB("user-list");
    const item = db?.items.filter(item => item.id==id);
    return item;

}

function putItemOnDB(id:number, name:string, alive:boolean) {
    //db.items.push({"id":"7"})
    const db = accessDB("user-list");
    db?.items.push({id, name, alive});
}

function popFromDB(id:number) {
    const db = accessDB("user-list");
    db?.items.pop();
}
//fim de banco de dados

const app: Express = express();
const port=process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => 
    {
        const itemFromDB = getItemFromDB(7);
        
        const loginResponse = login(req);
        const response = {
            ...loginResponse,
            "item":itemFromDB
        }
        res.send(response)
    });

app.get("/insert", (req:Request, res:Response) => 
    {
        putItemOnDB(7, "jacynda", true);
            
        const loginResponse = login(req);
        const response = {
            ...loginResponse,
        }
        res.send(response)
    });
    
    app.get("/pop", (req:Request, res:Response) => 
        {
            popFromDB(7);
                
            const loginResponse = login(req);
            const response = {
                ...loginResponse,
            }
            res.send(response)
        });
app.listen(port, () => {console.log("running")});