const express = require("express");
const app = express();
app.use('/static', express.static("public"));


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

app.get("/", (req, res) => {
  var hostname = "https://"+req.headers.host;
    var json = [{
        name: "Test Whatsapp",
        region: "US",
        createdOn: 1559807714999,
        price: "Price info of Test Whatsapp",
        csv: "Some CSV link for Whatsapp",
        report: "Some report link for Whatsapp",
        image_url: hostname + "/static/assets/images/Dashboard/Row/Thumb/Bitmap.png"
    }, {
        name: "Super Jewels Quest",
        region: "CA, FR",
        createdOn: 1559806715124,
        price: "Price info of Super Jewels Quest",
        csv: "Some CSV link for Super Jewels Quest",
        report: "Some report link for Super Jewels Ques",
        image_url: hostname + "/static/assets/images/Dashboard/Row-2/Thumb/Bitmap.png"
    }, {
        name: "Mole Slayer",
        region: "FR",
        createdOn: 1559806711124,
        price: "Price info of Mole Slayer",
        csv: "Some CSV link for Mole Slayer",
        report: "Some report link for Mole Slayer",
        image_url: hostname + "/static/assets/images/Dashboard/Row-3/Thumb/Bitmap.png"
    }, {
        name: "Mancala Mix",
        region: "JP",
        createdOn: 1559806680124,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-4/Thumb/Bitmap.png"
    }, {
        name: "Mancala Pro",
        region: "IND",
        createdOn: 1559704680124,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-5/Thumb/Bitmap.png"
    }, {
        name: "Jujube Pro",
        region: "UK",
        createdOn: 1559904680124,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-6/Thumb/Bitmap.png"
    }, {
        name: "Qwert Pro",
        region: "FR",
        createdOn: 1590829234000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-7/Thumb/Bitmap.png"
    }, {
        name: "Stan Pro",
        region: "AUS",
        createdOn: 1591001859000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-8/Thumb/Bitmap.png"
    }, {
        name: "Jon Pro",
        region: "UK",
        createdOn: 1590926515000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-2/Thumb/Bitmap.png"
    },{
        name: "San Due",
        region: "IND",
        createdOn: 1591926722000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-4/Thumb/Bitmap.png"
    },{
        name: "Pis Due",
        region: "FR",
        createdOn: 1591126722000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-7/Thumb/Bitmap.png"
    },{
        name: "Ast tis",
        region: "AUS",
        createdOn: 1591110522000,
        price: "Price info of Mancala Mix",
        csv: "Some CSV link for Mancala Mix",
        report: "Some report link for Mancala Mix",
        image_url: hostname + "/static/assets/images/Dashboard/Row-5/Thumb/Bitmap.png"
    }
    ]

    currentTimeStamp = Math.round(new Date().getTime());
    pTime = currentTimeStamp - 43200000
    uTime = currentTimeStamp + 43200000

    resultArr = []
    past = []
    upcoming = []
    live = []

    for (i = 0; i < json.length; i++) {
        if (json[i].createdOn < pTime) {
            past.push(json[i])
        } else if (json[i].createdOn > uTime) {
            upcoming.push(json[i])
        } else {
            live.push(json[i])
        }
    }
    resultArr = {
        'past': past,
        'live': live,
        'upcoming': upcoming
    }
  res.send(resultArr)});



app.listen(process.env.PORT||5000, () => console.log(`Example app listening`));
