const express = require("express");
const fetchData = require("./routes");
const cors = require("cors");
const app = express();
const port = 3001;

const corsOption = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

/* ------ Middleware Functions ------ */
app.use(express.json());
app.use(cors(corsOption));
app.use("/api", fetchData);

app.listen(port, () => console.log(`Server is watching on port ${port}`));
