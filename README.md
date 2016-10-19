# node_rest_server

##Goal of the project
A simple web server that answer with JSON content to some http requests.
This should help during the development phase of REST API. Often we need to open json files to test our code but because the restrictions of the browser we cannot load files on the filesystem.

##How to start
- Install node.js version 6.x.
- Start the application using: node server.js
- Browse http://localhost:3000

##How it works
The server read the url of the request (e.g.: http://localhost:3000/**hello_world**) and open the corresponding file (e.g. **hello_world**) found in the predefined directory (/json).

#How to add my json files
Create a file in the /json directory with the content that you want to see in the answer:
[PROJECT_ROOT]/rest/**my_example.json**

After the restart of the application you can call http://localhost:3000/**my_example**

##Future possible extentions
- Accept parameters
- Memory database
- POST, DELETE etc.
