
const fs = require("fs");
const path = require("path");

exports.resolvedPath  = function(directoryPath, fileName){
return path.resolve(directoryPath,fileName);
}


exports.readFile  = function(filePath)
{
return new Promise(function(resolve,reject)
{
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err){
        reject(err);
      }
      resolve(data);
    });
  });
}

 exports.readDir = function(directoryPath){
   return new Promise(function(resolve,reject){
     fs.readdir(directoryPath, (err, files) => {
       if (err){
         reject(err);
       }
       resolve(files);
    });
   });
}

exports.readDirFiles = function(directoryPath){
    
	var fileArray = [];
	
	var dirContent = exports.readDir(directoryPath).then(function(files){
		
		for (int i; i < files.length; i++)
		{
			 fileArray.push(exports.readFile(exports.resolvedPath(directoryPath,files[i])));
		}
		 return Promise.all(fileArray);
	});
	 return dirContent;
} 