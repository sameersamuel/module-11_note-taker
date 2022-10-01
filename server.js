const express = require("express");
const PORT = process.env.PORT || 3001;

const htmlRoute = require("./routes/htmlRoute");
const apiRoute = require("./routes/apiRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//routes
app.use("/", htmlRoute);
app.use("/api", apiRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT#: ${PORT}`)
});