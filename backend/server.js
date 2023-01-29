const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./data/data");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

connectDB();

app.use(express.json()); //to accept json data

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server created on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("API / is running");
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

//if the upper routes dont work - these are the error handler.
app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const neededchat = chats.find((c) => c._id === req.params.id);
//   res.send(neededchat);
// });
