# MernBook

Project Steps and Understanding

..inside the backend folder
npm init - y // adds a package.json file into the folder

        ..inside package.json file
        "type" : "module" // allows us to use ecmascript syntax i.e 'import' and 'export' keywords

    npm i express nodemon // installs expressjs - (we use express as our framework and nodemon for starting server automatically on change)

        ..inside package.json file
            ..in script section
                "start" : "node index.js" // will run the project with node.js environment
                "dev" : "nodemon index.js" // will run the project with nodemon, to be used in development

    creating a file 'index.js' // starter of the project
    // since express.js variable needs to listen to a port, we create the port in a different file 'config.js' and define the port in that file
    import port into index.js and listen to it using listen function
