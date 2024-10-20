
// -----------------------------------------------------------------------------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// -----------------------------------------------------------------------------
import Debug from "../lib/libjoe/source/Debug";
import Assert from "../lib/libjoe/source/Assert";
// -----------------------------------------------------------------------------
import ConfigPrivateRoutes from "./route/ConfigPrivateRoutes";
import ConfigPublicRoutes from "./route/ConfigPublicRoutes";

import { setupSwagger } from "./swagger";

//
// Env
//

// -----------------------------------------------------------------------------
require("dotenv").config();


//
// Cors
//

// -----------------------------------------------------------------------------
const corsOptions = {
  origin: "*", // process.env.CORS_ALLOWED_URL,
  methods: "GET,POST,PUT,DELETE, PATCH",
  allowedHeaders: "Content-Type,Authorization",
};


//
//  App
//

// -----------------------------------------------------------------------------
const app = express();
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/api", ConfigPrivateRoutes);
app.use("/api", ConfigPublicRoutes);

// Swagger
setupSwagger(app);

app.get("/api/health-check", (req: any, res: any) => {
  res.status(200).json({
    status: "OK",
    message: "Qui-Gon: \"The Queen doesn't need to know...\"",
    timestamp: new Date(),
  });
});

//
//  Database
//

// -----------------------------------------------------------------------------
Assert.NotNull(process.env.API_PORT,     "Missing env.API_PORT");
Assert.NotNull(process.env.SWAGGER_PORT, "Missing env.SWAGGER_PORT");
Assert.NotNull(process.env.MONGO_URI,    "Missing env.MONGO_URL");

const API_PORT      = process.env.API_PORT      as string;
const SWAGGER_PORT  = process.env.SWAGGER_PORT  as string;
const MONGO_URI     = process.env.MONGO_URI     as string;


// -----------------------------------------------------------------------------
mongoose
  .connect(
    MONGO_URI,
  )
  .then(() => {
      Debug.Log("Connected to MongoDB");
      //
      app.listen(API_PORT, () => {
        Debug.Log(`Server running on port ${API_PORT}`);
      });
      //
      app.listen(SWAGGER_PORT, () => {
        console.log(`Server is running on http://localhost:${SWAGGER_PORT}`);
        console.log(`Swagger UI is available at http://localhost:${SWAGGER_PORT}/api-docs`);
      });
  })
  .catch(err => {
    Debug.AbortError(err)
  });