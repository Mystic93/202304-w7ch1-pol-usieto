import { Types } from "mongoose";
import { type RobotDocumentStructure } from "../database/models/types";

const robotsMock: RobotDocumentStructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "Robotito",
    speed: 10,
    resistace: 10,
    creationDate: "2000/01/01",
    img: "Image",
  },
];

export default robotsMock;
