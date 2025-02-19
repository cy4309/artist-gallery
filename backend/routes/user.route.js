const router = require("express").Router();
const { getAllUsers, postAddUser } = require("../controller/user.controller");

/*Get all the users*/
router.get("/", async (req, res) => {
  try {
    //1
    const results = await getAllUsers();
    //6
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    //1
    // console.log(req.body.user);
    const results = await postAddUser(req);
    //6
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
