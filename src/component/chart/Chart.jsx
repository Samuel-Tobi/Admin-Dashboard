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
    <ResponsiveContainer width='100%' aspect={4 / 2}>
      <LineChart data={data}>
        {<XAxis dataKey='name' stroke='#5550bd' />}
        <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
        <Tooltip />
        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
      </LineChart>
    </ResponsiveContainer>
  );
}
