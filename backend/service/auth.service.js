const router = require("express").Router();
const firebaseAdminDb = require("../connections/firebase_admin");
const firebase = require("../connections/firebase_client");
const fireAuth = firebase.auth();

const postUserLogin = (req, res) => {
  return new Promise((resolve, reject) => {
    // console.log(req);
    const email = req.body.email;
    const password = req.body.password;
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        // console.log(user);
        console.log("登入成功");

        req.session.uid = user.uid;
        const jsonRes = {
          code: 200,
          msg: "success",
          data: "",
          email: user.email,
          username: user.displayName,
        };
        // console.log(jsonRes);
        resolve(jsonRes);
      })
      .catch((err) => {
        console.log(err);
        const jsonRes = {
          code: 200,
          msg: "success",
          data: "",
        };
        let errorMsg = err.message;
        if (
          errorMsg ==
          "The password is invalid or the user does not have a password."
        ) {
          errorMsg = "密碼有誤!";
          jsonRes.msg = "密碼有誤!";
          jsonRes.code = 401;
        } else if (errorMsg == "The email address is badly formatted.") {
          errorMsg = "帳號有誤!";
          jsonRes.msg = "帳號有誤!";
          jsonRes.code = 402;
        } else if (
          errorMsg ==
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          errorMsg = "查無此人!";
          jsonRes.msg = "查無此人!";
          jsonRes.code = 403;
        }
        reject(jsonRes);
      });

    // 驗證使用者有沒有在登入狀態
    fireAuth.onAuthStateChanged(function (user) {
      if (user) {
        // 使用者已登入，可以取得資料
        var email = user.email;
        var uid = user.uid;
        var username = user.username;
        // console.log(email, uid, username);
      } else {
        // 使用者未登入
      }
    });
  });
};

module.exports = {
  postUserLogin,
};
