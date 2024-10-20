// -----------------------------------------------------------------------------
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// -----------------------------------------------------------------------------
import { Application } from "express";
import packageJson from "../package.json";


// -----------------------------------------------------------------------------
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title:       packageJson.name,
      version:     packageJson.version,
      description: packageJson.description,
    },
  },
  servers: [
    { url: "/api", },
  ],

  apis: ["./source/route/*.ts"],
};


// -----------------------------------------------------------------------------
const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
