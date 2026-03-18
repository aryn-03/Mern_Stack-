// create min-express app
import exp from "express"
import { UserModel } from "../Models/UserModel.js"
export const UserApp=exp.Router()

// USER API Routes

// create user
UserApp.post("/users",async(req,res)=>{
    //get new user
    const newUser=req.body
    //create user doc
    const newUserDocumnet=new UserModel(newUser)
    //save
    await newUserDocumnet.save()
    //send res
    res.status(201).json({message:"user created"})

})
// read all user
UserApp.get("/users",async(req,res)=>{
    //read all users with Status true only
    let usersList=await UserModel.find({Status:true})
    //send res
    res.status(200).json({message:"users",payload:usersList})
})
// read a user by id
UserApp.get("/users/:id",async(req,res)=>{
    //get user from url
    let uid=req.params.id;
    //find user by id
    let user=await UserModel.findOne({_id:uid,Status:true})
    //send res
    res.status(200).json({message:"user found",payload:user})
})
// del a user by id
UserApp.delete("/users/:id", async (req, res) => {
    try {
        let uid = req.params.id;
        //find user & status to false
        let user = await UserModel.findByIdAndUpdate(uid,{ $set: { Status: false } },{ new: true });
        //check user
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //send res
        res.status(200).json({message: "User removed successfully"});
    } catch (err) {
        res.status(500).json({ message: "Error deleting user", error: err.message });
    }
});

//activate user (change status to true)
//PUT (complete change) & PATCH (partially changes)
UserApp.patch("/users/:id", async (req, res) => {
    try {
        const uid = req.params.id;

        const user = await UserModel.findByIdAndUpdate(
            uid,
            { $set: { Status: true } },{ new: true });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ message:"User activated",payload:user });
    } catch (err) {
        res.status(500).json({ message:"Error updating user", error: err.message });
    }
});

// update user by id (PUT - complete update, PATCH - partial update)
UserApp.put("/users/:id", async (req, res) => {
    try {
        const uid = req.params.id;
        const updateData = req.body;

        const user = await UserModel.findByIdAndUpdate(
            uid,
            { $set: updateData },
            { new: true, runValidators: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ message: "User updated successfully", payload: user });
    } catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
});