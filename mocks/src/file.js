const { readFile } = require("fs/promises");
const { join } = require("path");

class ReadFile {
  static async csvToJson(filePath) {
    const content = await ReadFile.getFileContent(filePath);
    return content;
  }

  static async getFileContent(filePath) {
    const filename = join(__dirname, filePath);
    return (await readFile(filename)).toString("utf8");
  }
}

(async () => {
  const result = await ReadFile.csvToJson("../emptyFile-invalid.csv");
  console.log(result);
})();
