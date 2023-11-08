import React from "react";
import {
  WiCloud,
  WiDaySunny,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { ImMeter2 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";

// custom function to convert timestamp into Normal time
import convertTimestampToTime from "../utils/convertTimestampToTime";

const WeatherCard = ({ data, isCoords }) => {
  // setting up timestamp sunrise, sunset, country, and city name
  var sunSet = isCoords ? data?.city?.sunset : data?.sys?.sunset;
  var sunRise = isCoords ? data?.city?.sunrise : data?.sys?.sunrise;
  var country = isCoords ? data?.city?.country : data?.sys?.country;
  var city = isCoords ? data?.city?.name : data?.name;
  var temp = isCoords ? data?.list[0]?.main?.temp : data?.main?.temp;
  var temp_feelsLike = isCoords
    ? data?.list[0]?.main?.feels_like
    : data?.main?.feels_like;

  const convertTemp = (temp) => {
    return Math.floor(temp - 273.15);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">
        {city}, {country}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-700">Temperature</p>
          <div className="flex items-center">
            <TbTemperatureCelsius
              size={20}
              color="#e74c3c"
              className="mr-2 animate-ping"
            />
            <p className="text-xl font-bold">{convertTemp(temp)} °C</p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Humidity</p>
          <div className="flex items-center">
            <WiHumidity
              size={20}
              color="#2ecc71"
              className="mr-2 animate-bounce"
            />
            <p className="text-xl font-bold">
              {isCoords
                ? `${data?.list[0]?.main?.humidity}`
                : `${data?.main?.humidity}`}{" "}
              %
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Weather</p>
          <div className="flex items-center">
            {isCoords ? (
              data?.list[0]?.weather[0]?.main === "Clouds" ? (
                <WiCloud
                  size={20}
                  color="#4299e1"
                  className="mr-2 animate-spin"
                />
              ) : (
                <WiDaySunny
                  size={20}
                  color="#f6e05e"
                  className="mr-2 animate-spin"
                />
              )
            ) : data?.weather[0]?.main === "Clouds" ? (
              <WiCloud
                size={20}
                color="#4299e1"
                className="mr-2 animate-spin"
              />
            ) : (
              <WiDaySunny
                size={20}
                color="#f6e05e"
                className="mr-2 animate-spin"
              />
            )}
            <p className="text-xl font-bold">
              {isCoords
                ? data?.list[0]?.weather[0]?.description
                : data?.weather[0]?.description}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Sunrise</p>
          <div className="flex items-center">
            <WiSunrise
              size={20}
              color="#f6ad55"
              className="mr-2 animate-bounce"
            />
            <p className="text-xl font-bold">
              {convertTimestampToTime(sunRise)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Sunset</p>
          <div className="flex items-center">
            <WiSunset
              size={20}
              color="#f687b3"
              className="mr-2 animate-bounce"
            />
            <p className="text-xl font-bold">
              {convertTimestampToTime(sunSet)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Wind Speed</p>
          <div className="flex items-center">
            <WiStrongWind
              size={20}
              color="#f39c12"
              className="mr-2 animate-bounce"
            />
            <p className="text-xl font-bold">
              {isCoords ? data?.list[0]?.wind?.speed : data?.wind?.speed} m/s
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Wind Degree</p>
          <div className="flex items-center">
            <WiStrongWind
              size={20}
              color="#043c9a"
              className="mr-2 animate-bounce"
              style={{
                transform: `rotate(${
                  isCoords ? data?.list[0]?.wind?.deg : data?.wind?.deg
                }deg)`,
              }}
            />
            <p className="text-xl font-bold">
              {isCoords ? data?.list[0]?.wind?.deg : data?.wind?.deg}°
            </p>
          </div>
        </div>

        <div>
          <p className="text-gray-700">Feels Like</p>
          <div className="flex items-center">
            <CiTempHigh
              size={20}
              color="#3498db"
              className="mr-2 animate-ping"
            />
            <p className="text-xl font-bold">
              {convertTemp(temp_feelsLike)}
              °C
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-700">Pressure</p>
          <div className="flex items-center">
            <ImMeter2
              size={20}
              color="#3498db"
              className="mr-2 animate-pulse"
            />
            <p className="text-xl font-bold">
              {isCoords ? data?.list[0]?.main?.pressure : data?.main?.pressure}{" "}
              hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
