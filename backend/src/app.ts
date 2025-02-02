import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import userRoutes from "./routes/users.routes";
import belongingRoutes from "./routes/belonging.routes";
import curfewRuleRoutes from "./routes/curfew.routes";
import qrCodeRoutes from "./routes/qrcode.routes";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use("/api", belongingRoutes);
app.use("/api", curfewRuleRoutes);
app.use("/api", qrCodeRoutes);
app.get("/", (req, res) => {
  res.send("Driver Service  Is  Running");
});

app.use(errorHandler);

export default app;
