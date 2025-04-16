import { db } from "../db";
import { delay } from "../../util/asyncSimulate";

export function accessDB(dbName: string) {
  if (dbName == "room-list") return db
}

export async function getItemFromDB(id: number) {
  const db = accessDB("room-list");
  await delay(1000)
  const item = db?.items.filter(item => item.id == id);
  if (!item || (item && item.length === 0)) throw new Error().message = "item not found";
  return item;
}

export async function getAllItemsFromDB() {
  const db = accessDB("room-list");
  await delay(1000)
  const items = db?.items;
  return items;
}

export async function putItemOnDB(
  id: number,
  roomName: string,
  chantGiver: string,
  chantSayers: number,
  creationDate: string,
  expirationDate: string
) {
  //db.items.push({"id":"7"})
  const db = accessDB("room-list");
  const item = db?.items.filter(item => item.id == id);
  if (item && item.length > 0) throw new Error().message = "item already exists";
  await delay(1000);
  db?.items.push({
    id, roomName,
    chantGiver,
    chantSayers,
    creationDate,
    expirationDate
  })
}

export async function popFromDB(id: number) {
  const db = accessDB("room-list");
  const item = db?.items.filter(item => item.id == id);
  if (!item || (item && item.length === 0)) throw new Error().message = "item not found";
  await delay(1000);
  db?.items.pop();
}