const userService = require("../service/user.service");

const getAllUsers = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      //2
      const res = await userService.getAllUsers();
      //5
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

const postAddUser = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log(req);
      const user = req.body.user;
      const res = await userService.postAddUser(user);
      resolve(res);
    } catch (error) {
      reject(error.Message);
    }
  });
};

module.exports = {
  getAllUsers,
  postAddUser,
};
