import React from 'react';
import { formatDate } from '../../lib/weather/weatherUtils';

const DailyForecast = ({ dailyData, WeatherCodeMap, unit }) => {
  if (!dailyData) return null;

  return (
    <div>
       <div className="bg-stone-900 text-white px-4 py-1 text-xs font-bold uppercase inline-block">
            7_DAY_FORECAST
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {dailyData.time.slice(0, 7).map((day, i) => {
                const snowSum = dailyData.snowfall_sum ? dailyData.snowfall_sum[i] : 0;
                const isSnow = snowSum > 0;
                
                return (
                <div key={day} className={`
                    p-4 border-stone-900 border-b-2 lg:border-b-0 lg:border-r-2
                    ${i === 3 || i === 7 ? 'lg:border-r-0' : ''}
                    ${i >= 4 ? 'lg:border-t-2' : ''}
                    hover:bg-yellow-50 hover:text-contrast transition-colors flex flex-row lg:flex-col justify-between items-center lg:items-start h-24 lg:h-auto
                `}>
                    <div className="text-left">
                        <span className="block text-xs font-bold text-stone-500 uppercase">{i === 0 ? "TODAY" : formatDate(day)}</span>
                        <span className="block text-sm font-bold mt-1 max-w-[120px] truncate">
                            {WeatherCodeMap[dailyData.weather_code[i]]}
                        </span>
                        {isSnow && (
                             <span className="block text-xs font-bold text-cyan-700 bg-cyan-100 px-1 rounded mt-1 w-fit">
                                Snow: {snowSum} {unit === 'imperial' ? 'in' : 'cm'}
                             </span>
                        )}
                    </div>
                    <div className="flex gap-4 lg:gap-2 items-center lg:mt-4">
                        <div className="text-right lg:text-left">
                            <span className="block text-xs text-stone-500 uppercase">MAX</span>
                            <span className="text-xl font-black">{dailyData.temperature_2m_max[i].toFixed(0)}°</span>
                        </div>
                        <div className="w-px h-8 bg-stone-300 mx-2 lg:hidden"></div>
                        <div className="text-right lg:text-left">
                            <span className="block text-xs text-stone-500 uppercase">MIN</span>
                            <span className="text-xl font-bold text-stone-600">{dailyData.temperature_2m_min[i].toFixed(0)}°</span>
                        </div>
                    </div>
                </div>
            )})}
             <div className="hidden lg:flex border-t-2 border-stone-900 bg-stone-900 text-white p-6 flex-col justify-center items-center">
                 <span className="text-4xl font-black">END</span>
                 <span className="text-xs uppercase">OF DATA STREAM</span>
             </div>
        </div>
    </div>
  );
};

export default DailyForecast;