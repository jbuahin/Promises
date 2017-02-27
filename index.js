let resolvedPath  = function(directoryPath, fileName){
return new Promise(function(resolve,reject){
	path.resolve(directoryPath,fileName);
});


let readFile  = function(filePath){
return new Promise(function(resolve,reject){
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err){
        reject(err);
      }
      resolve(data);
    });
  });
});

let readDir = function(directoryPath){
  return new Promise(function(resolve,reject){
    fs.readdir(directoryPath, (err, files) => {
      if (err){
        reject(err);
      }
      resolve(files);
    });
  });
};
