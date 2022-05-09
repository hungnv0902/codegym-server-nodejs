const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

const PORT = 7000;

const DB_URL = `mongodb://hungnv:123456@127.0.0.1:27017/testketnoi`;

const db = mongoose.connection;

mongoose.connect(DB_URL, { useNewUrlParser: true}).then(() => console.log('Db connect'));
db.on('error', (err) => {
  console.log("DB coonect err",err.message);
});

app.set("view engine", "ejs");
app.set("views", "./views")
const userRoute = require('./routes/userRouter');
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log("Server runing on port" + PORT);
})