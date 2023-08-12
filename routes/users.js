import express from 'express';
import { v4 as uuidv4 } from 'uuid'; 

const router = express.Router();
// we are changing users therefor need to use let instead of const
let users = [];




// all routes here are already starting with /users

//getting data from json with get
router.get('/', (req,res)=>{
    //console.log(users);
    res.send(users)
    res.send('Hello from user route');
});

// sending data to server with post
// USING POSTMAN
router.post('/', (req,res) => {
    //console.log('POST ROUTE REACHED');
    const user = req.body;
    // creating unique userID using uuid 
    users.push({...user,id:uuidv4()});
    res.send(`User with the name: ${user.firstName} added to the database`);

} );

//getting user by ID
router.get('/:id', (req,res)=>{
    const {id} = req.params;
    

    const foundUser = users.find((user)=>user.id === id);

    res.send(foundUser);

});

// creating rout to delete user based on ID
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    
    // if user ID not equal to ID keep it ~ filter one with ID
    users = users.filter((user)=> user.id != id);
    res.send(`Use with ID ${id} deleted`);

});

// handling the update of user information
// put => overwrites everything where as patch updates certain thing
router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age}=req.body;
    const userToBeUpdated = users.find((user)=>user.id ===id);

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`User with ID ${id} has been updated/patched`)
});
export default router;