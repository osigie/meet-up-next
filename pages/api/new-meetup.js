import { MongoClient } from "mongodb";

const handlePost = async (req, res) => {
  try {
    if (req.method === "POST") {
      const data = req.body;
      console.log(data);
      const client = await MongoClient.connect(
        "mongodb://localhost:27017/meetups"
        // "mongodb+srv://osagie:12345@cluster0.ebbrs.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetUpCollection = db.collection("meetups");

      const result = await meetUpCollection.insertOne(data);
      client.close();
      res.status(201).json({ message: "meetup created!" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

export default handlePost;
