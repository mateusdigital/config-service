// -----------------------------------------------------------------------------
import { Router } from "express";
// -----------------------------------------------------------------------------
import { ConfigController } from "../controller/ConfigController";
import Endpoints from "../Endpoints";
// -----------------------------------------------------------------------------
const PrivateRoutes    = Router();
const configController = new ConfigController();

// -----------------------------------------------------------------------------
// POST - Create new Voucher
/**
 * @openapi
 * /api/config:
 *   post:
 *     summary: Create a new config
 *     description: Create a new config...
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type:        object
 *                 description: The name of the voucher.
 *                 example:     "BGS 2024"
 *     responses:
 *       201:
 *         description: Voucher created successfully
 *       400:
 *         description: Bad request, missing required fields
 *       500:
 *         description: Internal server error
 */
PrivateRoutes.post(Endpoints.Config.Create, configController.CreateNew);

// -----------------------------------------------------------------------------
export default PrivateRoutes;