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

STEP 2 :

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
