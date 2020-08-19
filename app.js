const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");
const client = require("./db");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", async(req, res, next) => {
  try {
    const data = await client.query('SELECT * FROM posts')
//   const posts = data.rows;
    res.send(postList(data.rows));
  } catch (error) {next (error)}
// express provide build error hander using {next(error)}
//    console.error(error);
//    res.status(500).send(`Something went wrong: ${error}`);
});

app.get("/posts/:id", (req, res) => {
  const post = postBank.find(req.params.id);
  res.send(postDetails(post));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});