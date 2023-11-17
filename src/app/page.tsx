import WeatherDetails from '@/components/WeatherDetails';
import WeatherGeneral from '@/components/WeatherGeneral';
import WeatherForecast from '@/components/WeatherForecast';
import { Suspense } from 'react';

async function getWeather(location: string) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getForecast(location: string) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const city = 'Berlin';
  const weather = await getWeather(city);
  const forecast = await getForecast(city);

  const {
    name,
    main: { temp, humidity },
    wind: { speed: wind },
    clouds: { all: clouds },
    weather: [details],
  } = weather;

  const { list: items } = forecast;

  return (
    <main
      className='w-full flex flex-col lg:flex-row gap-10 justify-evenly items-center px-4 py-20 lg:py-0 sm:px-20 md:px-0 lg:px-0'
      data-testid='weather-app-container'
    >
      <Suspense fallback={<div>loading</div>}>
        <div className='flex flex-col justify-center gap-8 pt-10 sm:pt-0'>
          <WeatherGeneral temp={temp} name={name} details={details.main} />
          <WeatherDetails clouds={clouds} humidity={humidity} wind={wind} />
        </div>
        <WeatherForecast items={items} />
      </Suspense>
    </main>
  );
}
