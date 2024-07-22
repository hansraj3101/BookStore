import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./router/book-router.js"
import userRoute from "./router/user-router.js"
const app=express();
app.use(cors())
 app.use(express.json());
dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI;
// Connect to mongoDb
try{
    mongoose.connect(URI,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
  });
   console.log("Connected to Mongodb");
}catch(error){
    console.log("Error:",error);

}
app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})
