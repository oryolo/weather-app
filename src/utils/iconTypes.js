import React from 'react';
import { WiDaySunny, WiDayCloudy, WiRainMix, WiNightClear, WiSnow, WiSleet, WiWindy, WiFog, WiCloudy, WiNightCloudy, WiSunrise, WiSunset, WiHumidity } from 'weather-icons-react';

let iconProps = {
    size: 48,
    color: 'grey'
};

const iconTypes = {
    //weather
    'clear-day': <WiDaySunny {...iconProps} />,
    'clear-night': <WiNightClear {...iconProps} />,
    'rain': <WiRainMix {...iconProps} />,
    'partly-cloudy-day': <WiDayCloudy {...iconProps} />,
    'partly-cloudy-night': <WiNightCloudy {...iconProps} />,
    'snow': <WiSnow {...iconProps} />,
    'sleet': <WiSleet {...iconProps} />,
    'wind': <WiWindy {...iconProps} />,
    'fog': <WiFog {...iconProps} />,
    'cloudy': <WiCloudy {...iconProps} />,
    'humidity': <WiHumidity {...iconProps}/>,
    //other
    'sunrise': <WiSunrise size="22" color='grey'/>,
    'sunset': <WiSunset size="22" color='grey'/>
};



export {iconTypes, iconProps};