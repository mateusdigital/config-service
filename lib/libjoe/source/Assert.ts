//----------------------------------------------------------------------------//
//                   _                       _                                //
//                  | |__  _   _ _ __   ___ (_) ___   ___                     //
//                  | '_ \| | | | '_ \ / _ \| |/ _ \ / _ \                    //
//                  | | | | |_| | |_) |  __/| | (_) |  __/                    //
//                  |_| |_|\__, | .__/ \____/ |\___/ \___|                    //
//                         |___/|_|       |__/                                //
//                                                                            //
//  File      : Assert.ts                                                     //
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

// -----------------------------------------------------------------------------
export default class Assert
{
  // ---------------------------------------------------------------------------
  static True(cond: boolean, msg: string)
  {
    if(!cond) {
      debugger;
      throw new Error("Assert True");
    }
  }

  // ---------------------------------------------------------------------------
  static NotNull(cond: any, msg = "")
  {
    if(!cond) {
      debugger;
      Debug.Abort(msg);
    }
  }


  // ---------------------------------------------------------------------------
  static LogError(error: Error)
  {
    console.log(error.message);
  }


  // ---------------------------------------------------------------------------
  static Abort(msg = "")
  {
    console.log(msg);
    debugger;

    process.abort();
  }
}