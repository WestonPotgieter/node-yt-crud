import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';


const app = express();
const PORT = 5000; // Back-end 

app.use(bodyParser.json());

// running user routes
app.use('/users', usersRoutes);

// Creating a route - node & express are all about routes
app.get('/',(req,res)=>{
    
    res.send('Hello from homepage')
})

app.listen(PORT,()=> console.log(`Server running on port: http://localhost:${PORT}`));