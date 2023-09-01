"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
console.log(process.env);
// Default route
app.get("/", (req, res) => {
    res.send('Hello "updated" world!');
});
app.use("/user", userRoutes_1.default);
// app.use('/tweet', authenticateToken, tweetRoutes);
// app.use('/auth', authRoutes);
app.listen(3000, () => {
    console.log("Server ready at localhost:3000");
});
