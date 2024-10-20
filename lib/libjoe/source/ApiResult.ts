//----------------------------------------------------------------------------//
//                   _                       _                                //
//                  | |__  _   _ _ __   ___ (_) ___   ___                     //
//                  | '_ \| | | | '_ \ / _ \| |/ _ \ / _ \                    //
//                  | | | | |_| | |_) |  __/| | (_) |  __/                    //
//                  |_| |_|\__, | .__/ \____/ |\___/ \___|                    //
//                         |___/|_|       |__/                                //
//                                                                            //
//  File      : ApiResult.ts                                                  //
//  Project   : libjoe                                                        //
//  Date      : 2024-08-25                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : The Hyped Boys - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//
// -----------------------------------------------------------------------------
import Debug from "./Debug";
import ResponseStatusBody from "./Response/ResponseStatusBody";

// -----------------------------------------------------------------------------
class ApiResult
{
  value    : any;
  error    : any;
  errorJson: any;


  // ---------------------------------------------------------------------------
  static Valid(value: any)
  {
    return new ApiResult(value, null, null);
  }

  // ---------------------------------------------------------------------------
  static Invalid(value: any)
  {
    return new ApiResult(value, true, { message: `invalid: ${value}`});
  }


  // ---------------------------------------------------------------------------
  constructor(value: any, error: any, errorJson: any)
  {
    this.value     = value;
    this.error     = error;
    this.errorJson = errorJson;
  }

  // ---------------------------------------------------------------------------
  static async ResponseError(error: any): Promise<ApiResult>
  {
    try {
      const status_body = await error.json() as ResponseStatusBody;
      return new ApiResult(null, status_body, { errorMessage: status_body.errorMessage });
    }
    catch(e) {
      debugger;

      if(error.type == "cors") {
        return new ApiResult(null, error, { message: `${error.url} - ${error.statusText});` });
      }

      if(error.status == 999) {
        return new ApiResult(null, error, { message: `safe_fetch error;` });
      }
    }

    return new ApiResult(null, null, null);
  }


  // ---------------------------------------------------------------------------
  static ExceptionError(error: any)
  {
    Debug.LogError(error);
    return new ApiResult(null, error, { message: error.message });
  }

  // ---------------------------------------------------------------------------
  IsValid() { return this.value  && !this.error; }
  IsError() { return this.error; }
}

// -----------------------------------------------------------------------------
export default ApiResult;
