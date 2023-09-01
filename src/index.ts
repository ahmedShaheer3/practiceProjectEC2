import express, { Request, Response } from "express";
import userRoutes from './routes/userRoutes'
import 'dotenv/config'

const app = express();
app.use(express.json());

console.log(process.env) 

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send('Hello "updated" world!');
});

app.use("/user", userRoutes);
// app.use('/tweet', authenticateToken, tweetRoutes);
// app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log("Server ready at localhost:3000");
});
