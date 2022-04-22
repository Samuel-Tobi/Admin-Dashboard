import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Redeem,
  AttachMoney,
  Assessment,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Event,
  Report,
} from '@mui/icons-material';

export default function sidebar() {
  return (
    <div className='sideBar'>
      <div className='sidebarwrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' /> Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <PersonOutline className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarListItem'>
              <Redeem className='sidebarIcon' /> Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' /> Transactions
            </li>
            <li className='sidebarListItem'>
              <Assessment className='sidebarIcon' /> Report
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon' /> Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className='sidebarIcon' /> Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <Event className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
