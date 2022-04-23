import './widgetLg.css';
import image1 from './Images/MF-Doom.png';
import image2 from './Images/nas.png';
import image3 from './Images/royce-da-59.jpeg';
import image4 from './Images/sage-francis.jpeg';
// import image5 from './Images/tech-n9ne.jpg';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={image1} alt='' className='widgetLgImg' />
            <span className='widgetLgName'>MF - Doom</span>
          </td>
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={image2} alt='' className='widgetLgImg' />
            <span className='widgetLgName'>Nas</span>
          </td>
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={image3} alt='' className='widgetLgImg' />
            <span className='widgetLgName'>Royce - Da - 56</span>
          </td>
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={image4} alt='' className='widgetLgImg' />
            <span className='widgetLgName'>Savage - Francis</span>
          </td>
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}
