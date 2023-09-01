import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { email, name, userName, image = "", bio = "" } = req.body;
  let user = {
    email,
    name,
    username: userName,
    image,
    bio,
    isVerified: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  console.log("user is ", user);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username: userName,
        image,
        bio,
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
    console.log("user is", user);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("Error is", error);
    res.status(400).json({ error: true, message: "Unable to create user" });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUser = await prisma.user.findMany();
    console.log("allusers", allUser);
    res.status(200).json({ success: true, data: allUser });
  } catch (error) {
    res.status(400).json({ error: true, message: "Unable to get users" });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  console.log("allusers", user);
  if (!user) {
    res.status(404).json({ error: true, data: "User not found" });
    return;
  }
  res.status(200).json({ success: true, data: user });
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { bio, name, image } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { bio, name, image },
    });
    console.log("updateUser is called");
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ error: true, message: "Unable to update users" });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    console.log("updateUser is called");
    res.status(200).json({ success: true, data: 'User successfully deleted' });
  } catch (error) {
    res.status(400).json({ error: true, message: "Unable to delete user" });
  }
};
