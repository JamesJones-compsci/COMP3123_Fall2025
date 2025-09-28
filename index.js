<<<<<<< HEAD
// 1. Import Express
const express = require("express");

// 2. Create an app instance
const app = express();

// 3. Middleware to parse JSON request bodies
app.use(express.json());

// 4. Serve static files from /public
app.use(express.static("public"));

/* ------------------ ROUTES ------------------ */

// 5. GET /hello → Returns plain text
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// 6. GET /user?firstname=&lastname= → Query parameters
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// 7. POST /user/:firstname/:lastname → Path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// 8. POST /users → Array of users in request body
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

/* ------------------ SERVER ------------------ */

// 9. Set PORT (default 3000)
const PORT = process.env.PORT || 3000;

// 10. Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
=======
console.log('Happy developing ✨')
>>>>>>> 340d6502b0f661e25bf55fc4deb7dbfc30f05205
