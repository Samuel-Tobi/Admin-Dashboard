import Chart from '../../component/chart/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import './home.css';
import { UserData } from '../../dummyData';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import WidgetLg from '../../component/widgetLg/WidgetLg';
import React, { useState } from 'react';
import SliderBar from '../../component/slider/SliderBar';
import ProgressBar from '../../component/progressbar/ProgressBar';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(5);

  const getSliderData = value => {
    setSliderValue(value);
  };

  const userDataTransform = UserData.map(newUserData);

  function newUserData(month) {
    const newActiveUserValue =
      sliderValue * month['Active User'] * Math.random();
    const newMonthValue = { ...month, 'Active User': newActiveUserValue };
    return newMonthValue;
  }

  return (
    <div className='home'>
      <FeaturedInfo sliderValue={sliderValue} />

      <div className='chart'>
        <h3 className='chartTitle'>User Analytics</h3>
        <div className='chartContainer'>
          <div className='slider'>
            <SliderBar onDataSet={getSliderData} />
          </div>
          <div className='graph'>
            <Chart data={userDataTransform} grid dataKey='Active User' />
          </div>
          <div>
            <ProgressBar progressValue={sliderValue} />
          </div>
        </div>
      </div>

      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
