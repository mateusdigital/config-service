// -----------------------------------------------------------------------------
import { Router } from "express";
// -----------------------------------------------------------------------------
import { ConfigController } from "../controller/ConfigController";
import Endpoints from "../Endpoints";
// -----------------------------------------------------------------------------
const PublicRoutes     = Router();
const configController = new ConfigController();


// -----------------------------------------------------------------------------
// GET Latest Config
/**
 * @openapi
 * /api/config:
 *   get:
 *     summary: Retrieve latest configuration
 *     responses:
 *       200:
 *         description: The latest configuration
 */
PublicRoutes.get(Endpoints.Config.Get, configController.Get);

// -----------------------------------------------------------------------------
export default PublicRoutes;
