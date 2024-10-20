//----------------------------------------------------------------------------//
//                   _                       _                                //
//                  | |__  _   _ _ __   ___ (_) ___   ___                     //
//                  | '_ \| | | | '_ \ / _ \| |/ _ \ / _ \                    //
//                  | | | | |_| | |_) |  __/| | (_) |  __/                    //
//                  |_| |_|\__, | .__/ \____/ |\___/ \___|                    //
//                         |___/|_|       |__/                                //
//                                                                            //
//  File      : ResponseStatus.ts                                             //
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
import { Request, Response } from "express";
import { StatusCodes }       from "http-status-codes";
import { BaseResponseModel } from "../Request/BaseResponseModel";


// -----------------------------------------------------------------------------
class ResponseStatus
{
  static OK(req: Request, res: Response, payload: any, msg: string = "")
  {
    return res.status(StatusCodes.OK).json({
      success:      true,
      statusCode:   StatusCodes.OK,
      errorObject:  {},
      errorMessage: "",
      payload:      payload,
      message:      msg
    } as BaseResponseModel);

  }

  // ---------------------------------------------------------------------------
  static Created(req: Request, res: Response, payload: any, msg: string = "")
  {
    return res.status(StatusCodes.CREATED).json({
      success:      true,
      statusCode:   StatusCodes.CREATED,
      errorObject:  {},
      errorMessage: "",
      payload:      payload,
      message:      msg
    } as BaseResponseModel);
  }

  // ---------------------------------------------------------------------------
  static NotFound(req: Request, res: Response, message: string)
  {
    return res.status(StatusCodes.NOT_FOUND).json({
      success:      false,
      statusCode:   StatusCodes.NOT_FOUND,
      errorObject:  {},
      errorMessage: message,
      payload:      {},
      message:      message,
    } as BaseResponseModel);
  }

  // ---------------------------------------------------------------------------
  static BadRequest(req: Request, res: Response, errorMsg: string)
  {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success:      false,
      statusCode:   StatusCodes.BAD_REQUEST,
      errorObject:  {},
      errorMessage: errorMsg,
      payload:      {},
      message:      "",
    } as BaseResponseModel);
  }


  // ---------------------------------------------------------------------------
  static InternalServerError(req: Request, res: Response, error: any)
  {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      errorObject: error,
      errorMessage: error.message,
      payload: {},
      message: "",
    } as BaseResponseModel);
  }
}

// -----------------------------------------------------------------------------
export default ResponseStatus;