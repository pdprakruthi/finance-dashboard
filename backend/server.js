import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = {
  username: "admin",
  password: "1234"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Received:", username, password);

  if (username === user.username && password === user.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));