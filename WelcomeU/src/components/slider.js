import React from 'react';
import Slider from 'rc-slider';
import '../rc-slider.css'

const marks = {
  0: <strong>Couldn't understand or speak</strong>,
  25: <strong>Can understand but can't speak</strong>,
  50: <strong>Can understand and speak little bit</strong>,
  75: <strong>Can communicate easily</strong>,
  100: <strong>Fluent</strong>,
};

const EnglishSlider = () => (<div style={{width: 400, margin: 50 }}>
  <Slider min={0} marks={marks} step={null} onChange={(log) => console.log(log)} defaultValue={50} />
</div>);

export default EnglishSlider;
