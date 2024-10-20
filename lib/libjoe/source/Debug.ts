//----------------------------------------------------------------------------//
//                   _                       _                                //
//                  | |__  _   _ _ __   ___ (_) ___   ___                     //
//                  | '_ \| | | | '_ \ / _ \| |/ _ \ / _ \                    //
//                  | | | | |_| | |_) |  __/| | (_) |  __/                    //
//                  |_| |_|\__, | .__/ \____/ |\___/ \___|                    //
//                         |___/|_|       |__/                                //
//                                                                            //
//  File      : Debug.ts                                                      //
//  Project   : libjoe                                                        //
//  Date      : 2024-05-27                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : The Hyped Boys - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//


export default class Debug
{
  // ---------------------------------------------------------------------------
  static Log(msg = "")
  {
    console.log(msg);
  }

  // ---------------------------------------------------------------------------
  static LogError(error: Error)
  {
    console.log(error.message);
  }

  // ---------------------------------------------------------------------------
  static Exception(ex: any, msg: any)
  {
    console.log(msg);
    console.error(ex);
    debugger;
  }


  // ---------------------------------------------------------------------------
  static Abort(msg = "")
  {
    console.log(msg);
    debugger;

    process.abort();
  }

  static AbortError(error: Error)
  {
    Debug.Abort(error.message);
  }
}