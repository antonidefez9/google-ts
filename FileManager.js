
const fs = require('fs')
var readline = require('readline');

 class FileManager {

   constructor(file ){
    this.readStream = fs.createReadStream( file);
    this.writeStream = fs.createWriteStream( 'output_'+file, { encoding: "utf8"} )
   }

    readFile(){
        let myInterface = readline.createInterface({
            input: this.readStream,
            output: this.writeStream
          });
          myInterface.on('line', function (line) {
            let transformedLine = line.toUpperCase();
            setTimeout(() => {
              this.output.write(transformedLine + '\n');
            });
          });
    }
}

module.exports = FileManager;