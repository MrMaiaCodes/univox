import { getAllItemsFromDB } from "../db/dbOperation/dbService";

export async function getAllRoomsService() {
  try {
    const itemFromDB = await getAllItemsFromDB();
    return itemFromDB;
  }
  catch (e) {
    throw e;
  }
}