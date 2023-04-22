const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const { sequelize } = require("./models/index");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cookieParser());

app.use("/api", [indexRouter, authRouter, postsRouter]);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
