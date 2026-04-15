import http from "http";
import { MongoClient } from "mongodb";
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let collection;

async function startServer() {
  await client.connect();
  const db = client.db("libraryDB");
  collection = db.collection("requests");

  console.log("Connected to MongoDB");

  eventEmitter.on("requestAdded", (data) => {
    console.log("New request added:", data.bookTitle);
  });

  setInterval(() => {
    console.log("Server running...");
  }, 10000);

  const server = http.createServer(async (req, res) => {

    // GET
    if (req.url === "/requests") {
      const data = await collection.find().toArray();
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(data));
    }

    // ADD (browser)
    else if (req.url === "/add") {
      const data = {
        name: "Test User",
        bookTitle: "Node Demo",
        priority: "High"
      };

      await collection.insertOne(data);
      eventEmitter.emit("requestAdded", data);

      return res.end("Added successfully");
    }

    // DELETE
    else if (req.url.startsWith("/delete")) {
      const title = decodeURIComponent(req.url.split("/")[2]);

      await collection.deleteOne({ bookTitle: title });

      return res.end("Deleted");
    }

    // DEFAULT
    res.end("Invalid route");
  });

  server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
}

startServer();