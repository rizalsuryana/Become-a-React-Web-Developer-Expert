import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ResetButton from './ResetButton';
import { formatStopwatchFromMilliseconds } from '../../utils/stopwatch';

function StopwatchApp({ color }) {
  const [timeInMillis, setTimeInMillis] = useState(0);

  useEffect(() => {
    console.log('efek dijalankan');
    
  const intervalId = setInterval(() => {
      setTimeInMillis((prevValue) => prevValue + 100);
    }, 100);

    // clean up func cek on strict mode speed x2 (error)
    return () => clearInterval(intervalId);
  }, []);

  const onReset = () => { setTimeInMillis(0); };

  return (
    <div className="stopwatch" style={{ color }}>
      <p className="stopwatch-time">{formatStopwatchFromMilliseconds(timeInMillis)}</p>
      <ResetButton reset={onReset} color={color} />
    </div>
  );
}

StopwatchApp.defaultProps = {
  color: '#FFFFFF',
};

StopwatchApp.propTypes = {
  color: PropTypes.string,
};

export default StopwatchApp;
