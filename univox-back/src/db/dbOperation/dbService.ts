import {db} from "../db";
import { delay } from "../../util/asyncSimulate";

export function accessDB(dbName:string) {
  if(dbName=="user-list") return db
}

export async function getItemFromDB(id:number) {
  const db = accessDB("user-list");
  await delay(1000)
  const item = db?.items.filter(item => item.id==id);
  if(!item || (item && item.length === 0)) throw new Error().message = "item not found";
  return item;

}

export async function putItemOnDB(id:number, name:string, alive:boolean) {
  //db.items.push({"id":"7"})
  const db = accessDB("user-list");
  const item = db?.items.filter(item => item.id==id);
  if(item && item.length > 0) throw new Error().message = "item already exists";
  await delay(1000);
  db?.items.push({id, name, alive});
}

export async function popFromDB(id:number) {
  const db = accessDB("user-list");
  const item = db?.items.filter(item => item.id==id);
  if(!item || (item && item.length === 0)) throw new Error().message = "item not found";
  await delay(1000);
  db?.items.pop();
}