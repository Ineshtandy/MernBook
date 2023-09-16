# MernBook

Project Steps and Understanding

STEP 1 : SETTING UP A BASIC SERVER (using express js as the backend framework)

..inside the backend folder
npm init - y / adds a package.json file into the folder

        ..inside package.json file
        "type" : "module" / allows us to use ecmascript syntax i.e 'import' and 'export' keywords

    npm i express nodemon / installs expressjs - (we use express as our framework and nodemon for starting server automatically on change)

        ..inside package.json file
            ..in script section
                "start" : "node index.js" / will run the project with node.js environment
                "dev" : "nodemon index.js" / will run the project with nodemon, to be used in development

    creating a file 'index.js' / starter of the project
    / since express.js variable needs to listen to a port, we create the port in a different file 'config.js' and define the port in that file
    import port into index.js and listen to it using listen function

STEP 2 : CREATING AN HTTP ROUTE (using http method 'get')

..inside backend folder
node -v / check the version of the installed node.js

..npm run dev and open local host:port number
..open developer tools
..network section
?? what is 'request' in reference to 'request to local host
click on request named 'local host' aka request to local host to view 3 sections
..open general section
status code: 404 / we do not have the requested url
/ for each url we need to have an http route, default http route is '/'

..inside backed folder
..in index.js
/ expressjs to create http route
app.get() / to create a new route for slash route
/ get is an http method generally used for getting a resource from server, takes two parameter
/ param1 - string for route & param2 - callback function
/ callback function - recieves request and response as params and both can be managed
?? response parameter in callback function

STEP 3 : ADDING A DATABASE

/ local or online database can be used for this project
/ using mongoDB free online database
/ set up
/ connect -> drivers -> choose recent version of node.js -> copy connection string to use on server using a variable
/ use the variable on index.js
/ for working with mongoDB library we need mongoose library - npm i mongoose

..connection of db
/ use mongoose.connect(connection url) to connect to db
/ use .then and catch (similar to try and catch in java)
/ move get method inside 'then' block meaning we want express server to run only when database connection is successful aka (app.listen method inside then block and then block will only be executed when db connection is successful)
/ 'catch' block simply logs out the error

STEP 4 : CREATING A MODEL AND SCHEMA WITH MONGOOSE LIBRARY FUNCTIONS

/ ?? what is a model
/ mongoose is a javascript object oriented programming library for mongoDB helping in easy interaction with it using js script commands
/ to save an object named cat, you need a model for cat and the cat must have a schema ' { name : String} '
/ model is used to interact with the database
..storing all models in a models folder in backend
/ schema making approach is better to make it outside the model method using mongoose.Schema() method
/ multiple objects go inside a schema

STEP 5 : CREATING A BOOK AND PUTTING INTO DATABASE USING A POST METHOD / ROUTE

\*\* post and get methods in expressjs are also referred to as 'routes'

/ import book-model to create a book
/ to save a new book we need a new http route with 'post' type
/ post method used to create new resource ' app.post(route,callback-func) ' where app is express object
/ app.use(express.json()) helps express use json files
/ we cannot use browser for testing post method hence use postman (tool for working with web apis)

STEP 6 : GETTING ALL BOOKS FROM DATABASE USING GET METHOD

/ using 'find' function of model to retrieve the data
/ find({}) is a find function with an empty object, specifying that no particular constraint is required in retrieval, hence all records are retrieved
