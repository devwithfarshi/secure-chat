import { Model, Schema } from "mongoose";

const messageModel = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reciver: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);

export default Message = Model("Message", messageModel);
