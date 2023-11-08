// weather.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getWeatherByLocation(location: string): Promise<any> {
    // Implement logic to fetch weather data from the API based on the location
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Weather data retrieval failed');
    }
  }

  async getWeatherByLatLng(lat: string, lng: string): Promise<any> {
    // Implement logic to fetch weather data from the API based on the location
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Weather data retrieval failed');
    }
  }
}
