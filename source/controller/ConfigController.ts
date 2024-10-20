// -----------------------------------------------------------------------------
import { Request, Response } from "express";
// -----------------------------------------------------------------------------
import ResponseStatus from "../../lib/libjoe/source/Response/ResponseStatus";
import { Error_BusinessLogic, Error_ItemNotFound } from "../../lib/libjoe/source/Exception/Exceptions";
import ConfigModel from "../model/ConfigModel";
import { model } from "mongoose";


// -----------------------------------------------------------------------------
export class ConfigController
{
  // ---------------------------------------------------------------------------
  async Get(req: Request, res: Response)
  {
    // @TODO(mateusdigital): Add pagination...
    try {
      const version = req.params.version;
      const config = (version)
        ? await ConfigModel.findOne({ version })
        : await ConfigModel.findOne().sort({ createdAt: -1 });

      if (!config) {
        return ResponseStatus.NotFound(req, res, `Can't find config with version ${version}`);
      }

      return ResponseStatus.OK(req, res, config);
    }
    catch (err) {
      return ResponseStatus.InternalServerError(req, res, err);
    }
  }

  // ---------------------------------------------------------------------------
  async CreateNew(req: Request, res: Response)
  {
    try {
      const content = req.body.content;
      if(!content) {
        throw new Error_BusinessLogic("Missing config content");
      }

      const current_version = await ConfigModel.countDocuments();
      const next_version    = (current_version + 1);

      const model = new ConfigModel({
        version:   next_version,
        createdAt: Date.now(),
        content:   content,
      });

      await model.save();

      return ResponseStatus.Created(req, res, model);
    }
    catch (error) {
      if (error instanceof Error_BusinessLogic) {
        return ResponseStatus.BadRequest(req, res, error.message);
      }
      return ResponseStatus.InternalServerError(req, res, error);
    }
  }

}
