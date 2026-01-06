const User = require("../models/User");
const axios = require("axios");


exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email required" });
    }
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


exports.fetchAndStoreUsers = async (req, res) => {
  try {
   
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    const users = response.data.map(user => ({
      name: user.name,
      email: user.email
    }));

    
    const savedUsers = await User.insertMany(users);

    res.status(201).json({
      message: "Users fetched and stored successfully",
      data: savedUsers
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
