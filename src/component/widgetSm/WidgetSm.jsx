import './widgetSm.css';
import { Visibility } from '@mui/icons-material';
import image1 from './Images/chali-2na.jpg';
import image2 from './Images/eminem.jpg';
import image3 from './Images/jay-z.jpg';
import image4 from './Images/kool-g-rap.png';
import image5 from './Images/lil-wayne.jpg';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src={image1} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Chali 2na</span>
            <span className='widgetUserTitle'>Frontend Developer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={image2} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Eminem</span>
            <span className='widgetUserTitle'>Fullstack Developer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={image3} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Jay Z</span>
            <span className='widgetUserTitle'>Backend Developer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={image4} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kool-G</span>
            <span className='widgetUserTitle'>Product Designer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={image5} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Lil Wayne</span>
            <span className='widgetUserTitle'>Digital Marketer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
