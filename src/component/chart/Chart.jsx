import './chart.css';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function chart({ data, dataKey, grid }) {
  return (
    <div className='chart'>
      <div className='chartTitle'>
        <h3>User Analytics</h3>
      </div>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          {<XAxis dataKey='name' stroke='#5550bd' />}
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
