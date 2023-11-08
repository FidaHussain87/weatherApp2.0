# weatherApp2.0

In this project, I have created two separate folder, Client and server, for separating frontend abd backend work.

## Client Folder
Within this folder, I have used create Weather Card component to show information about specific region, based on user input in search Field
- By default it will show the wether information of Berlin City,
- When user type any city name or provide lat:lng values and Press search button, It will show the weather information (City Name, CountryName, Temperature, Humidity, Weather, sunrise, sunset, wind speed, wind degree,feel_s like temp, and pressure)

## server
In this folder I have created rest api by consming third paty api form openweather to fetch the weather information based on specific location, and send back to end user by using rest api.

- I have used postgress database for this project to store the information about logined user, 
- currently I just have implemented and tesetd user authentication REST API for login/ register, but due to time issue, I couldn't implement on frontend.
- I have also included .env file as public where I have stored apikey for openweather.

## To run the server project 
- Go to server directory and type npm install
  once, it is finished, type below command to run the project,
  ```sh
  npm run start:dev
  ```

## To run frontend(client app)
- Go to client directory and type npm install
  once, it is finished, type below command to run the project,
  ```sh
  npm start
  ```

  ## Technologies that I have used so far
  - NestJs
  - ReactJs
  - TailWind Css
  - Postgress Database
  - Visual studio code
  - TypeORM model
  - third party (openweather) api
  - react-icons
  - vercel(for deploying react frontend app)
  - render(for deploying backend nestjs app)
 
  - 
