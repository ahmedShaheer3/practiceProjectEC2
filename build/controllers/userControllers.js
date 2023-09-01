"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield prisma.user.create({
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
    }
    catch (error) {
        console.log("Error is", error);
        res.status(400).json({ error: true, message: "Unable to create user" });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield prisma.user.findMany();
        console.log("allusers", allUser);
        res.status(200).json({ success: true, data: allUser });
    }
    catch (error) {
        res.status(400).json({ error: true, message: "Unable to get users" });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield prisma.user.findUnique({ where: { id: Number(id) } });
    console.log("allusers", user);
    if (!user) {
        res.status(404).json({ error: true, data: "User not found" });
        return;
    }
    res.status(200).json({ success: true, data: user });
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { bio, name, image } = req.body;
    try {
        const updatedUser = yield prisma.user.update({
            where: { id: Number(id) },
            data: { bio, name, image },
        });
        console.log("updateUser is called");
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(400).json({ error: true, message: "Unable to update users" });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.user.delete({ where: { id: Number(id) } });
        console.log("updateUser is called");
        res.status(200).json({ success: true, data: 'User successfully deleted' });
    }
    catch (error) {
        res.status(400).json({ error: true, message: "Unable to delete user" });
    }
});
exports.deleteUser = deleteUser;
