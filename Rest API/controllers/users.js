import { v4 as uuidv4 } from "uuid";
let users = []

export const getUsers = (req,res)=>{
    res.send(users)
}

export const addUser= (req, res) => {    
    const user = req.body
    const  userWithID = {...user , id: uuidv4()}
    users.push(userWithID)
    res.send('User added to database');
}
export const getUser =  (req, res) => {
    let foundUser = users.find((user) => user.id === req.params.id);
    res.send(foundUser);

}
export const deleteUser =(req, res) => {
    const deletedUserId = req.params.id;

    users = users.filter((user) => user.id !== deletedUserId);

    res.send(`User with the ID ${deletedUserId} deleted from the database`);
} 

export const updateUser =(req, res) => {
    const { firstName, lastName, age } = req.body;
    const userId = req.params.id;
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    console.log(`User with ${userId} updated`);
    res.send(`User with ID ${userId} updated successfully`);
}
