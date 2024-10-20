
// -----------------------------------------------------------------------------
import { Schema, model, Document } from "mongoose";

// -----------------------------------------------------------------------------
interface ConfigDocument
  extends Document
{
}

// -----------------------------------------------------------------------------
const configSchema = new Schema({
  version: { type: Number, required: true },
  createdAt:   { type: Date, default: Date.now },
  content:   { type: Object, required: true },
});

// -----------------------------------------------------------------------------
const ConfigModel = model<ConfigDocument>("Config", configSchema);


// -----------------------------------------------------------------------------
export default ConfigModel;