/* eslint react/prop-types: 0 */
// Should use props validation
import React, { useRef } from 'react';
import { Typography } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SettingsIcon from '../utils/SettingsIcon';

const Container = (props) => {
  const {
    heading,
    parsedData,
    enableAutoPlay,
    autoPlaySpeed,
    componentName,
  } = props;
  const carousel = useRef(null);

  const resetSlider = () => {
    carousel.current.goTo(0);
  };

  const changeSlide = () => {
    carousel.current.slideNext(0);
  };

  return (
    <div>
      <Typography align="left" variant="h5">
        {heading}
      </Typography>
      <div className="subcontainer">
        <Carousel
          enableAutoPlay={enableAutoPlay}
          itemsToShow={2}
          renderPagination={() => <div> </div>}
          renderArrow={() => <div> </div>}
          ref={carousel}
          autoPlaySpeed={autoPlaySpeed}
          onNextEnd={(currentItem) =>
            currentItem.index === 2
              ? setTimeout(() => resetSlider(), 2000)
              : null
          }>
          {parsedData}
        </Carousel>
      </div>
      <div className="buttonalign">
        <IconButton variant="contained" color="primary" aria-label="setting">
          <SettingsIcon componentName={componentName} />
        </IconButton>
        <IconButton variant="contained" color="primary" aria-label="next">
          <ArrowForwardIcon onClick={changeSlide} />
        </IconButton>
      </div>
    </div>
  );
};

export default Container;
