require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5fc52ad0b7592b0d6644bbfd", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

require("../src/db/mongoose");

const Task = require("../src/models/task");

Task.findByIdAndDelete("5fc52e83582d7010b60bdead")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
