import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  speed: {
    type: Number,
    require: true,
  },
  resistance: {
    type: Number,
    require: true,
  },
  creationDate: {
    type: String,
    require: true,
  },
});

const Robot = model("Robot", robotSchema, "robotdb");

export default Robot;
