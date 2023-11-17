import { groupForecastByDate } from '@/utils/helpers';
import dayjs from 'dayjs';
import React from 'react';

function WeatherForecast({ items }: { items: any[] }) {
  const forecastItems = groupForecastByDate(items);
  return (
    <div
      className='w-full pt-8 max-w-max flex flex-col gap-y-4 justify-center'
      data-testid='forecast-container'
    >
      {forecastItems.map((dayForecast, i) => (
        <div
          key={i}
          className='p-4 sm:p-6 rounded-lg space-y-4 backdrop-blur-md backdrop-brightness-75'
          data-testid='forecast-day'
        >
          <h3 className='text-lg font-semibold'>
            {dayjs(dayForecast.date).format('dddd, D MMM')}
          </h3>
          <div className='flex overflow-x-auto gap-x-4'>
            {dayForecast.forecasts.map((f: any, j: number) => (
              <div
                key={j}
                className='flex flex-col justify-between items-center'
              >
                <span className='text-gray-400 text-sm'>{f.time}</span>
                <span className='text-xl font-bold'>
                  {Number(f.temp).toFixed(0)}°C
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
