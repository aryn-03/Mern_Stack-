import {Schema,model} from "mongoose"
// Create User Schema with validations
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"exist"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"required"]
    },
    mobileNumber:{
        type:Number,
    },
    // for soft delete
    Status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
}
)
// create User Model for Sser schema
export const UserModel =model("user",userSchema)