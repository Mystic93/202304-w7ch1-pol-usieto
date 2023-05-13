import Robot from "../../database/models/Robots.js";
import { type NextFunction, type Response, type Request } from "express";
import { getRobots } from "./robotsController.js";
import robotsMock from "../../mocks/robotsMock.js";

type CustomType = Pick<Response, "status" | "json">;

beforeEach(() => {
  jest.clearAllMocks();
});

const response: CustomType = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const request = {};
const next = jest.fn();

describe("Given a getRotots controller", () => {
  describe("When it recives a response", () => {
    test("Then it should call the response method status 200", async () => {
      const expectedSatutsCode = 200;

      Robot.find = jest
        .fn()
        .mockReturnValue({ exec: jest.fn().mockResolvedValue(robotsMock) });

      await getRobots(
        request as Request,
        response as Response,
        next as NextFunction
      );

      expect(response.status).toHaveBeenCalledWith(expectedSatutsCode);
    });

    test("Then it should call the the response method json with a list of robots", async () => {
      const expectedStatus = {
        robots: robotsMock,
      };

      await getRobots(
        request as Request,
        response as Response,
        next as NextFunction
      );

      expect(response.json).toHaveBeenCalledWith(expectedStatus);
    });
  });

  describe("When it receives a next a function and the exec method rejects with an 'Endpoint not found' error", () => {
    test("Then it should call next function with error 'Endpoint not found", async () => {
      const error = new Error("Error");

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(error),
      });

      await getRobots(
        request as Request,
        response as Response,
        next as NextFunction
      );
      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
