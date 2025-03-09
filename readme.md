# TravelApp

TravelApp is a web application that allows users to enter a destination and a date. The app then fetches and displays the weather forecast for the destination along with a photo of the location using external APIs. 
---

## Features
- **Destination Search**: Users can enter a destination and a date.
- **Weather Information**: The app fetches and displays the weather forecast for the specified destination and date.
- **Destination Photo**: A photo of the destination is fetched and displayed alongside the weather information.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Webpack
- **Backend**: Node.js, Express
- **APIs**: External APIs for weather and photo services
- **Testing**: Jest, Supertest
- **Environment Management**: `.env` file for environment variables
- **Build Tool**: Webpack
- **Styling**: Sass (via `node-sass` and `sass-loader`)

---

## Project Structure <br>
TRAVELAPP/
├── dist/ # Compiled files (output of Webpack)
├── node_modules/ # Node.js dependencies
├── src/ # Source code
│ ├── tests/ # Test files
│ ├── client/ # Frontend code (HTML, CSS, JS)
│ └── server/ # Backend code (Node.js, Express)
├── .env # Environment variables
├── .gitignore # Specifies files to ignore in Git
├── package-lock.json # Lockfile for dependencies
├── package.json # Project metadata and dependencies
├── readme.md # Project documentation
└── webpack.config.js # Webpack configuration file 
---

## Installation
Follow these steps to set up the project locally:

### 1. Clone the Repository 
### 2. Install Dependencies : npm install

## Development Mode : npm run dev

## Build the project: npm run build

## Start the production server: npm start

## Testing: The project includes a test suite using Jest and Supertest : npm test

## Environment Variables 
### GEONAMES_USERNAME=sada 
### WEATHERBIT_API_KEY=e28b4584c0f64b31af94a61046970166	
### PIXABAY_API_KEY=49169526-b6f4623da4e13b351cc6b7ade 

---
## Dependencies 
### Production Dependencies:
#### Express: Backend framework for handling server-side logic.

#### Cors: Middleware to enable CORS (Cross-Origin Resource Sharing).

#### Dotenv: Loads environment variables from a .env file.

#### Node-fetch: A library for making HTTP requests (used to fetch data from external APIs).

#### Body-parser: Middleware to parse incoming request bodies.

### Development Dependencies
#### Webpack: Module bundler for the frontend.

#### Babel: Transpiler for modern JavaScript.

#### Jest: Testing framework.

#### Supertest: Library for testing HTTP servers.

#### Sass: CSS preprocessor for styling.

#### Webpack Dev Server: Development server for Webpack.

##### For a full list of dependencies, refer to the package.json file.

## Notes: 
### Webpack Configuration: The webpack.config.js file is used to bundle the frontend code. It includes loaders for JavaScript, CSS, and Sass, as well as plugins like HtmlWebpackPlugin and MiniCssExtractPlugin.

### Testing: The __tests__ directory contains unit and integration tests for both the frontend and backend. Jest is used for testing, and Supertest is used for testing the Express server.

### Environment Variables: Ensure that the .env file is properly configured with the required API keys before running the project.
