const config = require("dotenv").config();
const express = require("express")
const app = express();
const path = require("path")
const PORT = process.env.PORT

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.all("/salla", function (req, res) {
  console.log(req.body);
  res.status(200).send("ok");
})

app.listen(PORT)



















/*
- update product sample
 (async () => {
  let d = await fetch("https://api.salla.dev/admin/v2/products/221493154", {
    method: "PUT",
    headers: {
      Authorization: "Bearer ory_at_iPhHCpTxsraV7mhznROdfecyOnv8p_XjmVq_Rj7GVLM.6Od2bAguH84k2faZNrGG_n4ropIlp6GsmUVhuLyQZs4",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "T-Shirt Blue",
      "price": 250,
      "quantity": 4,
    })
  });
  let data = await d.json();
  console.log(data)
  return data;
})()
*/


