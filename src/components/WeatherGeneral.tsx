import React from 'react';
import dayjs from 'dayjs';

function WeatherGeneral({
  temp,
  name,
  details,
}: {
  temp: number;
  name: string;
  details: string;
}) {
  return (
    <div className='flex justify-center items-center p-6 gap-8'>
      <span
        className='text-8xl sm:text-9xl font-bold'
        data-testid='weather-temp'
      >
        {Number(temp).toFixed(0)}°
      </span>
      <div className='flex flex-col gap-2'>
        <span className='text-3xl sm:text-5xl'>{name}</span>
        <span className=''>{dayjs().format("HH:mm - dddd, D MMM 'YY")}</span>
        <span className=''>{details}</span>
      </div>
    </div>
  );
}

export default WeatherGeneral;
