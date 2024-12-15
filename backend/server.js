import  express  from 'express';
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json()); // jb bhi hm frontend sa request backend p mangway ga wo is sa pass hoy gi
app.use(cors()); // is ko use kr k hm kisi bhi backend ko frontend p laa skta hein

// db connection

connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))


app.get("/", (req, res) => {
  res.send("API Working");
}); // hm request kr skta hein data server sa

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
}); // for running server
