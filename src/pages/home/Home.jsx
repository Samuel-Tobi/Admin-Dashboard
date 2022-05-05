import Chart from '../../component/chart/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import './home.css';
import { UserData } from '../../dummyData';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import WidgetLg from '../../component/widgetLg/WidgetLg';

export default function Home() {
  let sliderValue = 5;
  const userDataTransform = UserData.map(newUserData);

  function newUserData(month) {
    const newActiveUserValue = sliderValue * month['Active User'];
    const newMonthValue = { ...month, 'Active User': newActiveUserValue };
    return newMonthValue;
  }

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userDataTransform}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
