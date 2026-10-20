import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://react-express-backend-1.onrender.com"
        ],
        methods: ["GET","POST"],

}));

// Test route (important!)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Your POST route
app.post("/api/users", (req, res) => {
  console.log("Received:", req.body);
  res.json({ message: "User saved", user: req.body });
});

app.get("/api/users", (req, res) => {
  res.json({ message: "GET route working!" });
});

// IMPORTANT: Render requires this
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

