import express from "express"
import cors from "cors"
import connection from "../db/connecting.js"
import user from "../Models/FormSchema.js"


const app = express()

app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/register", async (req, res) => {
    console.log("Received POST request at /register");

    // console.log(req.body)
    const {
        fullName,
        email,
        phone,
        dob,
        gender,
        fname,
        fphone,
        laddress,
        same,
        areyoua,
        qualification,
        qualificationYear,
        college,
        designation,
        company,
        course
    } = req.body;

    const newdata = new user({
        fullName,
        email,
        phone,
        dob,
        gender,
        fname,
        fphone,
        laddress,
        same,
        areyoua,
        qualification,
        qualificationYear,
        college,
        designation,
        company,
        course
    });


    const datasave = await newdata.save();
    // console.log(datasave);
    res.status(200).send("Data is Saved");



});


app.get("/newdata", async (res, resp) => {

    const mongdata = await user.find()
    // console.log(mongdata)
    resp.send({ status: 200, message: "Data Has Came", mongdata: mongdata })


})


connection.then(() => {

    app.listen(8080, () => {
        console.log(`Server is listening at 8080`);
    });
});

