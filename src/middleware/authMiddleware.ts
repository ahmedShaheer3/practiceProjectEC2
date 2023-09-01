import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
/*
 **Validating jwt token
 */
exports.authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  // if token not found in cookies, check if header contains Auth field
  let token;
  if (req.header("Authorization")) {
    if (!req.header("Authorization")?.match("Bearer ")) {
      // checking if bearer is there in token
      return res.status(401).json({
        error: true,
        message: "Invalid token format",
      });
    }
    token = req.header("Authorization")?.replace("Bearer ", "");
  }
  // checking if token is there in api
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "token required",
    });
  }
};
