import exp from "express"
import {connect} from "mongoose"
import { config } from "dotenv"
import cors from "cors"
import { UserApp } from "./Apis/UserApi.js" 


config()

const app=exp()

//add cors
app.use(cors())
// Add body parser middleware
app.use(exp.json())
// Forward req to userapi
app.use("/user-api",UserApp)

// connect to DB
async function ConnectDB(){
    try{
        await connect(process.env.DB_URL)
        const port=process.env.PORT;
        app.listen(port,()=>console.log(`server on port ${port}`))
    }catch(err){
        console.log("err in connection",err)
    }
}

ConnectDB();

// Add error handling ware
app.use((err,req,res,next)=>{
    console.log("err in middleware:",err)
    res.json({message:"error",description:err.message});
});

