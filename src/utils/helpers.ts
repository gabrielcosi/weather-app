import dayjs from 'dayjs';

export const groupForecastByDate = (list: any) => {
  const groups = list.reduce((group: any, forecast: any) => {
    const date = dayjs(forecast.dt_txt).format('YYYY-MM-DD');
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push({
      time: dayjs(forecast.dt_txt).format('HH:mm'),
      temp: forecast.main.temp,
    });
    return group;
  }, {});

  return Object.keys(groups).map((date) => ({
    date,
    forecasts: groups[date],
  }));
};
