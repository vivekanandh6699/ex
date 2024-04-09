//authControllers.js

const User= require('../models/userModel');
const bcrypt = require('bcrypt');



//reg user 
module.exports={
    signup :async (req, res) => {
    const {email,password,name}=req.body;

    try{
        const user = await User.findOne({ email: email});

        if (user) {
            return res.status(400).json({
                message:"User already exist",
                status:"failure"
            });
        }
    
console.log("Received password:", password);
const hashedPassword = await bcrypt.hash(password, 10);
console.log("Hashed password:", hashedPassword);


        
        const newUser =  new User({
            email,
            name,
            password:hashedPassword
        });
        console.log(newUser)
        await newUser.save()
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
               
            },
        });

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:"failed to create user",
            status:"failure"
        })
    }
  

   
  
},


login : async (req, res) => {
    
    const { email, password } = req.body;
   

    try {
       
        // console.log("email,pwd",email, password);
    const user = await User.findOne({ email });
    // console.log(user);

    if (!user){

        return  res.status(400).json({message: 'User not found'});
    }
    console.log('Stored Password:', user.password); 
    console.log('Entered Password:', password);
    const pwd2=(await bcrypt.compare(password, user.password))
    console.log(pwd2);
    if (!email ||!pwd2) {
        return res.status(400).json({ message: 'Invalid email or password', status: 'failure' });
    }
   

    

    res.status(200).json({
        status: 'success',
        message: 'Logged in successfully',
    });
}
 catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to login', status: 'failure' });
}
},


updateUser: async (req, res) => {
    const userId = req.params.id; 
    const { email, password, name } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                status: 'failure'
            });
        }

        // Update user data
        if (email) 
        {
            user.email = email;
        }
   
         if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
         if (name) 
         {user.name = name}
        

        await user.save();

            res.status(200).json({
                status: 'success',
                message: 'User updated successfully',
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Failed to update user',
                status: 'failure'
            });
        }
    },

    deleteUser: async (req, res) => {
        const userId = req.params.id; 

        try {
            const user = await User.findByIdAndDelete(userId);

            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    status: 'failure'
                });
            }

            res.status(200).json({
                status: 'success',
                message: 'User deleted successfully',
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Failed to delete user',
                status: 'failure'
            });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({}, '_id name email'); // Retrieve only specific fields
            res.status(200).json({
                status: 'success',
                message: 'Users retrieved successfully',
                users: users
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Failed to retrieve users',
                status: 'failure'
            });
        }
    }
}
