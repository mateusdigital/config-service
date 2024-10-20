import JsonUtils from "../JsonUtils";

// -----------------------------------------------------------------------------
interface IError
{
  errorPayload?:  string;
}

// -----------------------------------------------------------------------------
export class Error_ItemNotFound
  extends Error
  implements IError
{
  errorPayload?: string | undefined;
  constructor(message: string)
  {
      super(message);
      this.name = "Item not Found";
  }
}

// -----------------------------------------------------------------------------
export class Error_BusinessLogic
  extends Error
  implements IError
{
  errorPayload: string;

  constructor(message: string, payload: any)
  {
      super(message);
      this.name = "Business Logic";
      this.errorPayload = JsonUtils.Serialize(payload);;
  }
}