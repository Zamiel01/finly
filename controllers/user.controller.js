const User = require('../lib/models/user.model');
const connectToDatabase = require('../lib/dbConnect'); // Ensure you import the connection function

// Default user data
const defaultEmail = 'nathan@gmail.com';
const defaultPassword = 'password';

// Create a new user
const createUser = async (req, res) => {
  try {
    // Ensure the database connection is established before querying
    await connectToDatabase();  // Ensure the database is connected

    // Use default username and password
    const newUser = await User.create({ email: defaultEmail, password: defaultPassword });

    // Render the response and pass the user data and message to the view
    res.render('user', { message: 'User Created', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).render('user', { message: 'Error creating user', user: null });
  }
};

// Get user by email (using default email)
const getUser = async (req, res) => {
  try {
    // Ensure the database is connected before querying
    await connectToDatabase(); // Ensure the database is connected

    // Use default email for retrieving user
    const user = await User.findOne({ email: defaultEmail });

    if (user) {
      // Render the response and pass the user data and message to the view
      res.render('user', { message: 'User Retrieved', user });
    } else {
      res.render('user', { message: 'User Not Found', user: null });
    }
  } catch (error) {
    console.error(error);
    res.status(500).render('user', { message: 'Error retrieving user', user: null });
  }
};

// Delete user by email (using default email)
const deleteUser = async (req, res) => {
  try {
    // Ensure the database is connected before querying
    await connectToDatabase();  // Ensure the database is connected

    // Use default email for deleting user
    const user = await User.findOneAndDelete({ email: defaultEmail });

    if (user) {
      res.render('user', { message: 'User Deleted', user: null });
    } else {
      res.render('user', { message: 'User Not Found', user: null });
    }
  } catch (error) {
    console.error(error);
    res.status(500).render('user', { message: 'Error deleting user', user: null });
  }
};

module.exports = {
  createUser,
  getUser,
  deleteUser,
};
