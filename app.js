const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
