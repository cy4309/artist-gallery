// const sqlite3 = require("sqlite3").verbose();

// let db = new sqlite3.Database("inventory-db.db");
// // 引入 passport 模組
// const passport = require("passport");
// // 引入驗證機制： passport-local
// const LocalStrategy = require("passport-local").Strategy;
// var bcrypt = require("bcrypt");

// passport.use(
//   new LocalStrategy(
//     // 當請 passport 要驗證時，呼叫此 callback 函式，並帶入驗證資訊驗證
//     function (username, password, done) {
//       let sqlQuery = `SELECT ID,USERNAME,NAME, PASSWORD,LEVEL FROM USER WHERE USERNAME = ?;`;
//       db.all(sqlQuery, [username], (err, rows) => {
//         if (!err) {
//           if (rows.length > 0) {
//             let user = rows[0];
//             let dbPassword = rows[0].password;
//             const verified = bcrypt.compareSync(password, dbPassword);
//             if (!verified) {
//               return done(null, false);
//             } else {
//               return done(null, user);
//             }
//           } else {
//             return done(null, false);
//           }
//         } else {
//           return done(err);
//         }
//       });
//     }
//   )
// );

// passport.serializeUser(function (user, done) {
//   // 只將用戶 id 序列化存到 session 中
//   // user.name = rows[0].username
//   let userObj = {
//     name: user.name,
//     id: user.id,
//     no: 1,
//   };
//   done(null, userObj);
// });

// passport.deserializeUser(function (id, done) {
//   done(null, id);
// });

// module.exports = passport;
