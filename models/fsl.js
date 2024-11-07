import mongoose from "mongoose";

const FslSchema = new mongoose.Schema({
    personalDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, required: true },
        aadharCardFront: { type: String, required: true },
        aadharCardBack: { type: String, required: true }
    },
    parent_Guardian_SpouseDetails: {
        name: { type: String, required: true },
        phoneNumber: { type: Number, required: true }
    },
    Educational_Details: {
        Are_You_a: {type: String,required: true},
        Last_Attained_Qualification: {type: String,required: true},
        Year: {type: Number,required: true},
        College_University: {type: String,required: true}
    },
    Course_Details: {
        Course: {type: String,required: true},
        How_you_came_to_know_about_us: {type: String,required: true}
    },
    Terms_condition:{
        type: Boolean,
        required: true
    }
});
const FslModel = mongoose.model("fsl", FslSchema);
export default FslModel;