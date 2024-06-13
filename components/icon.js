/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

const weatherIconMapping = {
    200: 'cloud-lightning', // thunderstorm with light rain
    201: 'cloud-lightning', // thunderstorm with rain
    202: 'cloud-lightning', // thunderstorm with heavy rain
    300: 'cloud-drizzle',   // light intensity drizzle
    301: 'cloud-drizzle',   // drizzle
    302: 'cloud-drizzle',   // heavy intensity drizzle
    500: 'cloud-rain',      // light rain
    501: 'cloud-rain',      // moderate rain
    502: 'cloud-rain',      // heavy intensity rain
    600: 'cloud-snow',      // light snow
    601: 'cloud-snow',      // snow
    602: 'cloud-snow',      // heavy snow
    800: 'sun',             // clear sky
    801: 'cloud',           // few clouds
    802: 'cloud',           // scattered clouds
    803: 'cloud',           // broken clouds
    804: 'cloud',           // overcast clouds
    // Add more mappings as needed
  };
const getWeatherIcon = (weatherId) => {
    return weatherIconMapping[weatherId] || 'cloud';
  };
  export default getWeatherIcon;
