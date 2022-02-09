const express = require("express");
const app = express();
const port = 3000;
const fetchData = require("./routes");
/* ------ Middleware Functions ------ */
app.use(express.json());

app.use("/api", fetchData);

app.listen(port, () => console.log(`Server is watching on port ${port}`));
