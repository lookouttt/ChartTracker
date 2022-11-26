const express = require("express");
const bodyParser = require("body-parser");
const v1ChartRouter = require("./v1/routes/chartRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/charts", v1ChartRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
})