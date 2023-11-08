// weather.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from '../service/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeatherByLocation(
    @Query('location') location: string,
  ): Promise<any> {
    return this.weatherService.getWeatherByLocation(location);
  }

  @Get('forecast')
  async getWeatherByLatLng(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
  ): Promise<any> {
    return this.weatherService.getWeatherByLatLng(lat, lng);
  }
}
