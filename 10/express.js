const express = require("express");
// console.log(express);
const morgan = require("morgan");
const debug = require("debug")("elice");
const app = express();
//express가 함수이기 때문에 app에 넣어서 사용

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("hello, world!");
// });

app.set("etag", false);

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(static.root, options));
app.listen(PORT);
