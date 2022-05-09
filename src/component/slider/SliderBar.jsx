import './slider.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';

export default function SliderBar({ onDataSet }) {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  const [data, setData] = useState(15);

  const handleChange = (event, newData) => {
    setData(newData);
    onDataSet(newData);
  };

  return (
    <div className='slider'>
      <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          value={data}
          onChange={handleChange}
          orientation='vertical'
          // defaultValue={30}
          aria-label='Temperature'
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
}
