import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

export async function connectDB() {
  await client.connect();
  db = client.db("libraryDB");
  console.log("Connected to MongoDB");
}

export function getCollection() {
  return db.collection("requests");
}