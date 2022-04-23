import Chart from '../../component/chart/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import './home.css';
import { UserData } from '../../dummyData';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import WidgetLg from '../../component/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={UserData}
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
