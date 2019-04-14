# Movies Listing Example

## Environment setup

* Mac:
 1. Install Node (https://nodejs.org/en/download/)
 2. On your terminal, `cd` into the `movies` directory
 2. Initialize node modules by running `npm install` in the terminal
 3. Start the server using `npm run server` in the terminal
 4. Open browser and browse to `http://localhost:8080`

* Windows:
 1. Install Node (https://nodejs.org/en/download/)
 2. On your cmd prompt, `cd` into the `movies` directory
 2. Initialize node modules by running `npm install` in the cmd prompt
 3. Start the server using `npm run server` in the cmd prompt
 4. Open browser and browse to `http://localhost:8080`


## What this example does:
 1. You will find data.json in the `src` folder. It contains a list of movie information and reviews for each movie.
 2. Read the data in data.json.
 3. Display the movies in a list. A screenshot is provided in mockup.png. The screenshot is taken from http://www.imdb.com/list/ls053420126/
 4. All images are available in `public/images` folder. The movie information we would like to see on the page is the image, title, year, synopsis, and url. The title should be clickable, which takes users to the url.
 5. Create a "Read Review" button for each movie. When users click one of them, the review for the specific movie will be expanded to show the review of the movie.

## Libraries:
 1. Material-UI
 2. SASS
 3. ReactStars
