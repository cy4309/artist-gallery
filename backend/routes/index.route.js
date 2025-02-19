const router = require("express").Router();
const firebaseAdminDb = require("../connections/firebase_admin");
const firebase = require("../connections/firebase_client");
// const userRef = firebaseAdminDb.ref("/user");

router.get("/", function (req, res, next) {
  console.log(firebase.auth());
  firebaseAdminDb.ref().once("value", function (snapshot) {
    console.log(snapshot.val());
  });
  //   firebaseDb.ref("list").once("value", function (snapshot) {
  //     //once是非同步的
  //     var auth = req.session.uid;
  //     res.render("index", {
  //       title: "六角學院留言板",
  //       auth: auth, // 判斷是不是登入的狀態
  //       errors: req.flash("errors"),
  //       list: snapshot.val(),
  //     });
  //   });
});

module.exports = router;
