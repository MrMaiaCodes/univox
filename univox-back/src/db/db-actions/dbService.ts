import {db} from "../db";

export function accessDB(dbName:string) {
  if(dbName=="user-list") return db
}

export function getItemFromDB(id:number) {
  const db = accessDB("user-list");
  const item = db?.items.filter(item => item.id==id);
  return item;

}

export function putItemOnDB(id:number, name:string, alive:boolean) {
  //db.items.push({"id":"7"})
  const db = accessDB("user-list");
  db?.items.push({id, name, alive});
}

export function popFromDB(id:number) {
  const db = accessDB("user-list");
  db?.items.pop();
}