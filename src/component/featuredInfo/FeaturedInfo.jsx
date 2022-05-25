import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo(sliderValue) {
  const currentFeaturedMoney = sliderValue.sliderValue * 70;
  const currentFeaturedMoneyRate = sliderValue.sliderValue * 5;
  const currentFeaturedSales = sliderValue.sliderValue * 100;
  const currentFeaturedSalesRate = sliderValue.sliderValue * 3.5;
  const currentFeaturedCost = sliderValue.sliderValue * 50;
  const currentFeaturedCostRate = sliderValue.sliderValue * 1.5;

  return (
    <div className='featured'>
      <div
        className={`featuredItem ${
          currentFeaturedMoney >= 2500 ? 'revenue' : ''
        }`}
      >
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${currentFeaturedMoney}</span>
          {currentFeaturedMoneyRate < 180 && (
            <span className='featuredMoneyRate '>
              {currentFeaturedMoneyRate}
              <ArrowDownward className='featuredIcon negative' />
            </span>
          )}
          {currentFeaturedMoneyRate >= 180 && (
            <span className='featuredMoneyRate'>
              +{currentFeaturedMoneyRate}
              <ArrowUpward className='featuredIcon positive' />
            </span>
          )}
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
      <div
        className={`featuredItem ${
          currentFeaturedSales >= 4800 ? 'sales' : ''
        }`}
      >
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${currentFeaturedSales}</span>
          {currentFeaturedSalesRate < 164 && (
            <span className='featuredMoneyRate'>
              {currentFeaturedSalesRate}
              <ArrowDownward className='featuredIcon negative' />
            </span>
          )}

          {currentFeaturedSalesRate >= 164 && (
            <span className='featuredMoneyRate'>
              +{currentFeaturedSalesRate}
              <ArrowUpward className='featuredIcon positive' />
            </span>
          )}
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
      <div
        className={`featuredItem ${currentFeaturedCost >= 2700 ? 'cost' : ''}`}
      >
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${currentFeaturedCost}</span>
          {currentFeaturedCostRate < 81 && (
            <span className='featuredMoneyRate'>
              {currentFeaturedCostRate}
              <ArrowDownward className='featuredIcon negative' />
            </span>
          )}
          {currentFeaturedCostRate >= 81 && (
            <span className='featuredMoneyRate'>
              +{currentFeaturedCostRate}
              <ArrowUpward className='featuredIcon positive' />
            </span>
          )}
        </div>
        <div className='featuredSub'>Compared to last month</div>
      </div>
    </div>
  );
}
