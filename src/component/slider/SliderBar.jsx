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

  const handleChange = (event, newData) => {
    setData(newData);
    onDataSet(newData);
  };

  const [value, setData] = useState(1);

  return (
    <div className='slider'>
      <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          value={value}
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
