import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/routes.js";
import {PORT} from "./port.js"

const app = express();
app.use(cors());
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use( "/api", router);


app.listen(PORT, () => {
    console.log(`Server running on port, http://localhost:${PORT}`);
});

export default app

