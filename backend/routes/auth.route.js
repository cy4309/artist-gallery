const router = require("express").Router();
const { postUserLogin } = require("../controller/auth.controller");
// let passport = require("../middleware/auth");

/*login a user*/
router.post("/login", async (req, res) => {
  // return new Promise(async (resolve, reject) => {
  try {
    const results = await postUserLogin(req);
    // console.log(req);
    if (req.session.uid) {
      res.send(results);
    }
    // resolve(results);
  } catch (error) {
    res.status(error.code).send(error);
  }
  // });
});

/*Get logged*/
// router.get("/loggedin_user", async (req, res) => {
//   try {
//     const results = await getLogginedUser(req);
//     res.send(results);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

/*logout*/
// router.post("/logout", async (req, res) => {
//   try {
//     req.logout(function (err) {
//       if (err) {
//         return next(err);
//       }
//       res.status(200).send("ok");
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

module.exports = router;
