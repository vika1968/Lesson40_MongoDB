import express from "express";

import mongoose from "mongoose";
import UserModel from "./userModel";

export async function getAllUsers(req: express.Request, res: express.Response) {
  try {
    const usersDB = await UserModel.find();
    if (!usersDB)
      throw new Error(
        "no users found on FUNCTION getAllUsers IN FILE userCtrl"
      );
    res.send({ usersDB });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function getUserByID(req: express.Request, res: express.Response) {
    try {
        const userDB = await UserModel.findById(req.params)
    } catch (error) {
        res.status(500).send({error: error})
    }
}


//http://localhost:3000/api/users/register 