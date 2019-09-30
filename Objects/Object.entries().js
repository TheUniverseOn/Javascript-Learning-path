// Object.entries() creates a nested array of the key/vlaue pairs on an object

//Intialise an object 
const operatingSystem = {
    name: 'macOS', 
    version: 'Catalina', 
    license: 'Appe', 
    releaseDate: 'Sep 2019'
}
const entries = Object.entries(operatingSystem);
console.log(entries)

/* [ [ 'name', 'macOS' ], 
  [ 'version', 'Catalina' ], 
  [ 'license', 'Appe' ], 
  [ 'releaseDate', 'Sep 2019' ] ] */