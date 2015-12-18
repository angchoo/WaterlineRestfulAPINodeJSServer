# WaterlineRestfullAPINodeJSServer
A restful API Node Server using waterline as ORM

The Above project is a basic HTTP API node.js server which is connected to MySql database using waterline JS as ORM.
Note that we are some few configuration to do before running this project:

The database script has been put in /sqlscript/foobar.sql

1. Run the script to create the database 'foobar' which contain one table and one view.
2. Modify the adapters.js script accordingly based on your MySql settings such as the port number, username and password.
3. I recommend to use postman which is a plugin of Google Chorme to sent HTTP verb request to the server .

### Prepare your environment
* Install local dev dependencies: 'npm install'  in repository directory