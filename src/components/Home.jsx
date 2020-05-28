/* eslint react/prop-types: 0 */
import React from 'react';
import UpComingEvents from './UpComingEvents';
import MajorStoriesNextSprint from './MajorStoriesNextSprint';
import AlmDefects from './AlmDefects';
import ScrComponent from './ScrComponent';
import SnowIncidents from './SnowIncidents';

const Home = (props) => {
  const switchValues = props.state; // eslint-disable-line
  // checkedA should be fixed like to have correct name, and props validation
  const showUpComingEvents = switchValues.checkedA;
  const showMajorStoriesNextSprint = switchValues.checkedB;
  const showAlmDefetcsTable = switchValues.checkedC;
  const showSnowIncidents = switchValues.checkedD;
  const showScrComponent = switchValues.checkedE;

  return (
    <>
      <div className="contentwrapper">
        {showUpComingEvents ? <UpComingEvents /> : null}
        {showMajorStoriesNextSprint ? <MajorStoriesNextSprint /> : null}
      </div>
      <div className="wrapper">
        {showAlmDefetcsTable ? <AlmDefects /> : null}
        {showSnowIncidents ? <SnowIncidents /> : null}
        {showScrComponent ? <ScrComponent /> : null}
      </div>
    </>
  );
};

export default Home;
