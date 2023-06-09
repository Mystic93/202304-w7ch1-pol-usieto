import { type Types } from "mongoose";

export interface RobotsStructure {
  name: string;
  img: string;
  speed: number;
  resistace: number;
  creationDate: string;
}

export interface RobotDocumentStructure extends RobotsStructure {
  _id: Types.ObjectId;
}
