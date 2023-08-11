const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/hello", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.get("/api/customers", (req, res) => {
    res.send({
        customers: [
            {
                id: 1,
                image: "https://picsum.photos/id/1/64/64",
                name: "John Doe",
                birthday: "1985-07-15",
                gender: "Male",
                job: "Software Engineer",
            },
            {
                id: 2,
                image: "https://picsum.photos/id/2/64/64",
                name: "Jane Smith",
                birthday: "1990-03-22",
                gender: "Female",
                job: "Marketing Manager",
            },
            {
                id: 3,
                image: "https://picsum.photos/id/3/64/64",
                name: "Alex Johnson",
                birthday: "1978-11-05",
                gender: "Male",
                job: "Teacher",
            },
        ],
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
