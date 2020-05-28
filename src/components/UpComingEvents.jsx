import React, { useState, useEffect } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useSelector } from 'react-redux';
import Container from './Container';
import apiCall from '../apis/apiCall';

const UpComingEvents = () => {
  const [responses, setResponse] = useState({});
  const carouselData = useSelector((state) => state.carouselSettings);
  const enableAutoPlay = carouselData.data.UpcomingEvents.startCarousel;

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      await apiCall
        .getData('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
          if (mounted) {
            setResponse(response.data);
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
        });
    };
    fetchData();
    return () => (mounted = false);// eslint-disable-line
  }, []);

  const parsedData =
    responses.length > 0 ? (
      responses.slice(0, 4).map((response) => (
        <div key={response.id} className="card">
          <div className="cardheader">
            <p> {response.title} </p>{' '}
            {/* Replace it with description `response.description` */}
          </div>
          <span className="left_text">{response.userId}</span>{' '}
          {/* Replace it with date `response.date` */}
          <span className="right_text">
            <CalendarTodayIcon />
          </span>
        </div>
      ))
    ) : (
      <></>
    );

  return (
    <div>
      <h3 style={{ margin: '0px' }}>Up coming events:</h3>
      <div className="borderedbox">
        <Container
          parsedData={parsedData}
          autoPlaySpeed={2000}
          enableAutoPlay={enableAutoPlay}
          componentName="UpcomingEvents"
        />
      </div>
    </div>
  );
};

export default UpComingEvents;
