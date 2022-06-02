<h1 align='center'>Weather App</h1>
<p align='center'>
Responsive Weather App with DarkMode <br>using NodeJS and TailwindCSS. <br>
<a href="https://santiagocodes-weather-app.herokuapp.com/"><img src="https://img.shields.io/badge/DEMO-Weathereader-9cf.svg?style=flat"></a>
</p>

[![Weather-App video](https://i.postimg.cc/Z5JZ3pSv/weather-app-pic.png)](https://www.dropbox.com/s/by17ivtn9okk6be/weatherNode.mp4?dl=0)

<img height="75px" align='left' src="https://santiagocodes.github.io/santiagocodes/images/octocat-santiagocodes.png" alt="santiagocodes octocat" />

## Initial Setup

1. [Clone](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository) the repository.

-   On Git Bash navigate to the folder you want your cloned directory to be made.
-   Type `git clone https://github.com/minhtran241/weathereader.git`.
-   Press `enter`

2. Install package dependencies.

-   On Git Bash navigate to the cloned directory by typing `cd weather-app-node` and press `enter`.
-   Install dependencies by typing `npm i` or `npm install` and press `enter`.

## Scripts you can run in your terminal within this app...

`npm run start`

Note: This will fire up the local server so you can view the application locally in your browser (on localhost:3000). This is possible because the script `"start": "node src/app.js"` was added to package.json.

`npm run dev`

Note: This starts up the local developement server easily. This is possible because the script `"dev": "nodemon src/app.js -e js,hbs"` was added to package.json.

## Heroku Setup

-   Sign up an account on [Heroku](www.heroku.com).
-   Download the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
-   Restart the terminal.
-   Check if the tool has installed correctly by entering `heroku -v` on the terminal. If the output looks something like this `heroku/7.40.0 win32-x64 node-v12.16.2` it means everything went ok.
-   Run the command `heroku login`. This will allow you to link the commands you run in your terminal to your heroku account so you manage your projects from Visual Studio Code.
-   After running the previous command, press any key (except for `q`) which will open a new tap in the browser asking you to log in to your Heroku account.
-   After logging in you can close the tap.
-   For more information on this you can take a look at the [documentation](https://devcenter.heroku.com/articles/deploying-nodejs) on deploying NodeJS apps on Heroku.

-   To set up your SSH public key file run the command `heroku keys:add` which will output the keys found and will ask you if you would like to upload it to Heroku? Type in `yes` and hit enter. Now that SSH key is associated with your Heroku account so that code can be sent back and forth safely.
-   To create your Heroku application run the command `heroku create` or `heroku create name-of-the-project`(which you should run from the root of your project). The name of the project has to be unique not only on your account, but all around the web.
-   From this you will get two URLs: the first will be your live URL where you can see your deployed website and the second will be the URL for the GIT repository where you should be pushing the code you want to deploy.
-   Go to `package.json` under `scripts`. From there you can add the script `"start":"node src/app.js"`. We can use this command to start the application locally by running `npm run start` on the terminal. That is the command Heroku is going to run to start the application on their servers.
-   On `src/app.js` we need to change the last line `app.listen(4000, () => {console.log("Server is up on port 4000.");});` to `app.listen(port, () => {console.log("Server is up on port " + port);});`. You should also add `const port = process.env.PORT || 4000` at the beggining of the file, right below the `app` variable.
-   On `public/js/app.js` you are going to have to remove the domain inside `fetch` completely by changing the URL provided from `http://localhost:4000/weather?address=${location}` to `/weather?address=${location}`.
-   Start the process of commiting your changes with `git status`, `git add .`, `git commit -m 'Setup app for Heroku'` and finally `git push`.
-   To push to the Heroku remote, run `git push heroku master` on your terminal.

Note: If you have your API keys hidden in .env you may have to configure the variables into your Heroku account via the dashboard. For more information on this, click [here](https://devcenter.heroku.com/articles/config-vars).
