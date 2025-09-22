const express = require("express");
const app = express();

app.use(express.json());

app.get("/foo", (req, res) => res.type("text/plain").send("bar"));

app.post("/hello", (req, res) => {
  const name = req.body?.name ?? "";
  res.type("text/plain").send(`Hello ${name}!`);
});

const server = app.listen(process.env.PORT || 8080, () =>
  console.log("Listening on", server.address().port)
);

app.get("/kill", (req, res) => {
  res.type("text/plain").send("Shutting down...");
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 1000);
});
