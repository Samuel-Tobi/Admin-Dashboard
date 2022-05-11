import './progressBar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar(props) {
  const value = props.progressValue;

  return (
    <div className='progress'>
      <CircularProgressbar value={value} text={`${value}%`} />
    </div>
  );
}
