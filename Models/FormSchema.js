import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required: true,
        unique: false,
        maxLength:50,
        maxLength:4,
    },
    email:{
        type: String,
        required:true,
        unique: false,
        maxLength:50,
        minLength:4,

    },

    number:{
        type:Number,
        required: true,
        unique: false,
    },



    dob :{
        type:  Number,
        required: true,
        unique: false,
        default:Date.now()

    },

    gender:{
        type:String ,
        required:false,
         default:false,
    },

fname:{
    type:String,
    required:true,
    unique:false,
    maxLength:30,
    minLength:4,

},

lname:{
    type:String,
    required:true,
    unique:false,
    maxLength:30,
    minLength:4,


},

Comment:{
    type: String,
    required:true,
     unique:false,
     maxLength: 150
},
address:{
    type:String,
    required:true,
    unique:false,
   
},
education:{
    type:String,
    required:true,
    unique:false,

},

   passing:{
    type:String,
    required:true,
    unique:false,
   },


 collage:{
    type:String,
    required:true,
    unique: false ,

 },

 desiganation:{
    type : String,
    required: true, 
    unique:false,

 },
 experince:{
    type:String,
    unique:false,
    required:true,

 },

 option:{
    type:String,
    unique:false,
    required:true,

 },
})

 const user =  mongoose.model('user',userSchema)

 export default user;


