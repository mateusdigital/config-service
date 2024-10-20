import * as JSON5 from 'json5';

// -----------------------------------------------------------------------------
export class JsonUtils
{
  // ---------------------------------------------------------------------------
  static Serialize(data: any, formatted = false)
  {
    const spaces = formatted ? 2 : 0;
    const content = JSON.stringify(data, null, spaces);

    return content;
  }

  // ---------------------------------------------------------------------------
  static Deserialize(data: string)
  {
    const json_object = JSON5.parse(data);
    return json_object
  }
}

export default JsonUtils;