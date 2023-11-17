import React from 'react';

function WeatherDetails({
  clouds,
  humidity,
  wind,
}: {
  clouds: number;
  humidity: number;
  wind: number;
}) {
  return (
    <ul className='space-y-6 px-10'>
      {[
        { title: 'Cloudy', value: clouds, unit: '%' },
        { title: 'Humidity', value: humidity, unit: '%' },
        { title: 'Wind', value: wind, unit: 'm/s' },
      ].map((detail) => (
        <li key={detail.title} className='flex justify-center gap-20 text-left'>
          <span>{detail.title}</span>
          <div>
            <span>{detail.value}</span>
            <span>{detail.unit}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default WeatherDetails;
