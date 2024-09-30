//External Module=>


//At first we have to initialize npm,So in Terminal we will write : npm init
//init means Initialization,We need only one time to initialize it, then we can use multiple external module 
//then in terminal,several information will come and we have to proceed through answering them accordingly
//After successfully completing the information,we can see "package.json" file will created and showing it to the left side
//package.json is actually a summary of a application/project.
//now we can use the external module
//In order to get the external module,we browse "npmjs"
//we can pick any module,for example: random fruits name
//Now,we have to install it ,we can either choose direct npm installation which is given in the documentation,or manually install it by writing in terminal npm install package name 
//such as : npm install random-fruits-name 
//After installation we can see it on the left side and the most importanly,the json file which we created,at the bottom,we will notice "dependencies random-fruits-name",which means it is now dependable to the external module which we recently installed
//the more we use external module,the dependencies will be increased
//and one more thing,we can also notice a new folder "node_module" where necessary code is wriiten there
//Now that we have installed,in order to use it,we have read the documents from that particular package
//For example :

const getRandomFruitsName = require('random-fruits-name')

console.log(getRandomFruitsName()) // Apple - English is default language

//here "getRandomFruitsName"is the variable name,we can write anything as this is variable name but 'random-fruits-name' is the package name,so it should be same as that,we have the require it
//Now get getRandomFruitsName() this method can call any randomly fruits name,in oder to see it,we need to run in terminal node filename.js, for example node index2.js 
//That's how we can use external module 

const randomMovieNames = require('random-movie-names');

console.log(randomMovieNames());


