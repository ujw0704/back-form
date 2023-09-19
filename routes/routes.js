import express from "express"
import cors from "cors"
import  connection from "../db/connecting.js"
import  user from "../Models/FormSchema.js"


const app = express()


app.use(cors({origin:"http://localhost:3001/"}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/register",async(req,res)=>{
    // const { body } = req;

    console.log(req.body)
    const newdata = await user({
        number,
        email,
        dob,
        gender,
        fname,
        lname,
        comment,
        adress,
        education,
        passing,
        collage,
        designation,
        experince,
        option, 
        
    });
    
         console.log("hello")
    res.status(200).send("hello is working")
    
});


connection.then(()=>{

        app.listen(8080,() => {
            console.log(`Server is listening at 8080`);
        }); 
    });