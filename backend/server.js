const createError = require("http-errors");
const express = require("express"); // 建構REST API，幫助前後端實現通訊
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); // 解析請求
// app.use(express.static(path.join(__dirname, "public")));
const cors = require("cors"); // 提供Express中間件
const flash = require("connect-flash");
const validator = require("express-validator");
const session = require("express-session");
const app = express();

const indexRoute = require("./routes/index.route.js");
const userRoute = require("./routes/user.route.js");
const authRoute = require("./routes/auth.route.js");

const corsOptions = {
  origin: "*", // *是任何都可以進入
};

// * app use *-----------------------------------------------------
app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(validator());
app.use(flash());
app.use(cookieParser());
// app.use(express.static("public"));
app.use(
  session({ secret: "mysupersecret", resave: true, saveUninitialized: true })
);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use("/", indexRoute); // 首頁route
app.use("/user", userRoute); // 註冊firebase用
app.use("/auth", authRoute); // 登入會員用

// app.use(function (req, res, next) {
//   if (req.session.uid) {
//     console.log(req.session.uid);
//     // return res.redirect("/", indexRoute);
//   }
//   // res.redirect("/user", userRoute);
// });

// * set port *-----------------------------------------------------
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`服務器運行端口： ${PORT}.`);
});
