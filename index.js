import express from "express";
import authRoutes from "./routes/authRoutes.js";
import "./services/passport.js";

const app = express();
authRoutes(app);

app.listen(process.env.PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
