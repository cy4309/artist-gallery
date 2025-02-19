const firebaseAdminDb = require("../connections/firebase_admin");
const firebase = require("../connections/firebase_client");
const fireAuth = firebase.auth();
const userRef = firebaseAdminDb.ref("/user/");

// * get *-----------------------------------------------------
/* GET home page. */
// router.get("/", async (req, res, next) => {
//   authRef.once("value").then((snapshot) => {
//     const authText = snapshot.val();
//     res.json({ title: authText });
//   });
// });

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    userRef.once("value").then((snapshot) => {
      const userText = snapshot.val();
      resolve(userText);
    });
  });
};

const postAddUser = (user) => {
  return new Promise((resolve, reject) => {
    const username = user.username;
    const email = user.email;
    const password = user.password;
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(function (temp) {
        // console.log(temp);
        const saveUser = {
          username: username,
          email: email,
          password: password,
          uid: temp.uid,
        };
        firebaseAdminDb.ref("/user/" + temp.uid).set(saveUser);

        var currentUser = fireAuth.currentUser;
        currentUser
          .updateProfile({
            displayName: saveUser.username,
          })
          // 要點是要上面firebase建立完有資料後，.then才會有currentUser資訊
          .then(function () {
            // console.log(fireAuth.currentUser.displayName);
            const jsonRes = {
              code: 200,
              msg: "success",
              data: "",
            };
            if (user.uid !== "") {
              resolve(jsonRes);
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

module.exports = {
  getAllUsers,
  postAddUser,
};
