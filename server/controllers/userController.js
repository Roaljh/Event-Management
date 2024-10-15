const User = require('../models/userModel'); 
const createUser = (req, res) => {
const { Name, Email, Password, Department, Year, Preferences } = req.body;
    console.log(Name);
    // Create a new user instance
    const newUser = new User({
        Name,
        Email,
        Password,
        Department,
        Year,
        Preferences
    });

    // Save the user to the database
    console.log(newUser)
    newUser.save()
        .then(user => {
            // Send a response back to the client
            res.status(200).json({ message: 'User created successfully', user });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error creating user', error });
        });
};

const loginUser = (req, res) => {
    const { Email, Password } = req.body;

    // Find the user by email
    User.findOne({ Email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ status : 'fail',message: 'User not found' });
            }

            // Check if the password matches
            if (user.Password !== Password) {
                return res.status(401).json({ status : 'fail',message: 'Invalid password' });
            }

            // Send a response back to the client
            res.status(200).json({ status : 'sucess',message: 'Login successful', user });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error logging in', error });
        });
};

module.exports = {
    createUser,
    loginUser,
};

