const express = require("express");
const app = express();
const port = 8000;
app.use('/static', express.static("public"));

const json = {
  data: [
    {
      name: "Test Whatsapp",
      region: "US",
      createdOn: 1559807714999,
      price: "Price info of Test Whatsapp",
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url:
        "http://localhost:8000/static/assets/images/Dashboard/Row/Thumb/Bitmap.png"
    },
    {
      name: "Super Jewels Quest",
      region: "CA, FR",
      createdOn: 1559806715124,
      price: "Price info of Super Jewels Quest",
      csv: "Some CSV link for Super Jewels Quest",
      report: "Some report link for Super Jewels Ques",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-2/Thumb/Bitmap.png"
    },
    {
      name: "Mole Slayer",
      region: "FR",
      createdOn: 1559806711124,
      price: "Price info of Mole Slayer",
      csv: "Some CSV link for Mole Slayer",
      report: "Some report link for Mole Slayer",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-3/Thumb/Bitmap.png"
    },
    {
      name: "Mancala Mix",
      region: "JP",
      createdOn: 1559806680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-4/Thumb/Bitmap.png"
    },
    {
      name: "Mancala Pro",
      region: "IND",
      createdOn: 1559704680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-5/Thumb/Bitmap.png"
    },
    {
      name: "Jujube Pro",
      region: "UK",
      createdOn: 1559904680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-6/Thumb/Bitmap.png"
    },
    {
      name: "Qwert Pro",
      region: "FR",
      createdOn: 1590607680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-7/Thumb/Bitmap.png"
    },
    {
      name: "Stan Pro",
      region: "AUS",
      createdOn: 1590904680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "http://localhost:8000/static/assets/images/Dashboard/Row-8/Thumb/Bitmap.png"
    }
  ]
};
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => res.send(json));

app.listen(process.env.port || port, () => console.log(`Example app listening on port ${port}!`));
