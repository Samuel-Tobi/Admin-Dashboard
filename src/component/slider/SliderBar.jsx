import './slider.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderBar() {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <div className='slider'>
      <Box sx={{ height: 200 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          orientation='vertical'
          defaultValue={30}
          aria-label='Temperature'
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
}
