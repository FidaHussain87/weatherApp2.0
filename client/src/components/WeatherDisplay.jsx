import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { WiDaySunny } from "react-icons/wi";

const WeatherDisplay = () => {
  const [location, setLocation] = useState("Berlin"); // Default location
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCoords, setIsCoords] = useState(false);
  
  //   define function to call an api based on user input region / lat:lng
  const fetchWeatherData = async () => {
    setWeatherData(null); // Reset weather data state before inserting new data
    let apiUrl = "";
    if (location) {
      // Set loading state to true before calling an API
      setLoading(true);
      //   if user enters coordinates instead of region name then it's applying regex on input location string
      const isLatLng = location.match(/^-?\d+\.\d+\s*:\s*-?\d+\.\d+$/);
      if (isLatLng) {
        const [newLat, newLng] = location.split(":").map((val) => val.trim());
        apiUrl = `${process.env.REACT_APP_REST_API}/weather/forecast?lat=${newLat}&lng=${newLng}`;
        setIsCoords(true);
      } else {
        setIsCoords(false);
        apiUrl = `${process.env.REACT_APP_REST_API}/weather?location=${location}`;
      }
      try {
        await axios
          .get(apiUrl)
          .then((response) => {
            setWeatherData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Set loading state to false after the API call is completed
      }
    } else {
      console.log("Please provide a search input");
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  //   using search button to handle an API call
  const handleSearch = () => {
    fetchWeatherData(); // Trigger the API call
  };

  useEffect(() => {
    fetchWeatherData(); // Fetch weather data on initial render
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-semibold mb-4">Weather Information</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter City Name or Coordinates (lat:lng)"
            className="flex-1 rounded-l-lg p-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
          >
            Search
          </button>
        </div>
        { <WeatherCard data={weatherData} isCoords={isCoords} />}
      </div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <WiDaySunny className="text-6xl text-yellow-400 animate-spin" />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherDisplay;
