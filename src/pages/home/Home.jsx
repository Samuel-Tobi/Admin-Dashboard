import Chart from '../../component/chart/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import './home.css';
import { UserData } from '../../dummyData';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import WidgetLg from '../../component/widgetLg/WidgetLg';
import React, { useState } from 'react';
import SliderBar from '../../component/slider/SliderBar';

// import SliderBar from '../../component/slider/SliderBar';

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);

  const getSliderData = value => {
    setSliderValue(value);
  };

  const userDataTransform = UserData.map(newUserData);

  function newUserData(month) {
    const newActiveUserValue = sliderValue * month['Active User'];
    const newMonthValue = { ...month, 'Active User': newActiveUserValue };
    return newMonthValue;
  }

  return (
    <div className='home'>
      <FeaturedInfo />
      <div className='slider'></div>

      <div className='chartContainer'>
        <SliderBar onDataSet={getSliderData} />
        <Chart data={userDataTransform} grid dataKey='Active User' />
      </div>

      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
