// -----------------------------------------------------------------------------
export class BaseResponseModel
{
  success:      boolean        = false;
  statusCode:   number         = -1;
  errorObject:  any    | null  = null;
  errorMessage: string | null  = null;
  payload:      any    | null  = null;
  message:      string | null  = null;



}

// -----------------------------------------------------------------------------
export default BaseResponseModel;