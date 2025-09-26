import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import projectRoutes from "./routes/project.js";
import signupRoutes from "./routes/user.js";

dotenv.config();
const app=express();

app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true }));
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001','http://localhost:4001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/api/projects',projectRoutes);
app.use('/api/users', signupRoutes);

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
  
    .then(()=>{
        console.log("database connection is ready");
        app.listen(process.env.PORT|| 4000,()=>{
            console.log(`server is running on http://localhost:${process.env.PORT|| 4000}`);
        } );
    })
.catch((err)=>{
    console.error("data base connection error",err);
    process.exit(1);
});

