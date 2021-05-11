Step 1: First create a folder and run commands below:
  cmd no 1: npm init -y : This Gives package.json (Here, Add description og the
  app and change the main file to server.js from main.js)

  cmd no 2: npm i express bcryptjs jsonwebtoken config express-validator
  mongoose
            Little Description: 1: express - this handles routing
                                2: bcryptjs - this helps with the password 
                                3: jsonwebtoken - authetication
                                4: config - this is global variable
                                5: express-validator - validates the body
                                6: mongoose - for the database

    cmd no 3: npm i -D nodemon concurrently
            Little Description: 1: nodemon - this helps us in watching our
                                   server which will help us not to manually restart it whenever we
                                   change anything
                                2: concurrently - this will allow us to run
                                   backend and the frontend at the same time
        After this add some script i.e start : "node server.js" and server :
        "nodemon server.js" 
 

Step 2: For this app is to create server.js file and put these lines of code:
        
        const express = require('express');

        const app = express();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));