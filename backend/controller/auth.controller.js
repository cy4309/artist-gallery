const authService = require("../service/auth.service");

const postUserLogin = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log(req);
      // const user = req.body;
      const res = await authService.postUserLogin(req);
      // console.log(req);
      resolve(res);
    } catch (error) {
      // console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  postUserLogin,
};
