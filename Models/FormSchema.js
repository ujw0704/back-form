import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: false,
        maxLength: 50,
        minLength: 4,
    },
    email: {
        type: String,
        required: true,
        unique: false,
        maxLength: 50,
        minLength: 4,
    },
    phone: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
    gender: {
        type: String,
        required: false,
        default: "Unknown",
    },
    fname: {
        type: String,
        required: true,
        unique: false,
        maxLength: 30,
        minLength: 4,
    },
    fphone: {
        type: Number,
        required: true,
    },
    laddress: {
        type: String,
        required: true,
        unique: false,
        maxLength: 150,
    },
    same: {
        type: String,
        required: true
    },
    areyoua: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true,
        unique: false,
    },
    qualificationYear: {
        type: Number,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
        unique: false,
    },
    company: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
});

const user = mongoose.model('user', userSchema);

export default user;
