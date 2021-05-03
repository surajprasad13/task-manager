const mongoose = require("mongoose");

const url = "mongodb+srv://surajprasad13:suraj1313@cluster0.vil9v.mongodb.net/dzirex?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
