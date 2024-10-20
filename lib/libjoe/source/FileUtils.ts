import Assert from "./Assert";
import fs from "fs";


export class FileUtils
{
  static ReadAllFile(filepath: string): string | null
  {
    Assert.NotNull(filepath, "Filepath can't be null");

    try {
      const content = fs.readFileSync(filepath, 'utf-8');
      return content;
    }
    catch(error) {
      // @XXX
      return null;
    }
  }
}

export default FileUtils;