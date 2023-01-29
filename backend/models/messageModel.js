const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    content: { type: String, trim: true },
    sender: { type: mongoose.Schema.Types.objectId, ref: "User" },
    chat: { type: mongoose.Schema.Types.objectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messagSchema);
module.exports = Message;
