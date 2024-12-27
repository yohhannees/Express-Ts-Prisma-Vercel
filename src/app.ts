import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import example from "./routes/example.routes";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use("/api/example", example);
app.get("/", (req, res) => {
  res.send("Driver Service  Is  Running");
});

app.use(errorHandler);

export default app;
