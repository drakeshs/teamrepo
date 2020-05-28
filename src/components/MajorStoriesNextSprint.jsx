import React, { useState, useEffect } from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useSelector } from 'react-redux';
import Container from './Container';
import apiCall from '../apis/apiCall';

const MajorStoriesNextSprint = () => {
  const [responses, setResponse] = useState({ data: [] });
  const carouselData = useSelector((state) => state.carouselSettings);
  const enableAutoPlay = carouselData.data.MajorStoriesNextSprint.startCarousel;

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      await apiCall
        .getData('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          if (mounted) {
            setResponse(response.data.slice(0, 4));
          }
        })
        .catch((error) => {
          console.log(error); // eslint-disable-line
        });
    };
    fetchData();
    return () => (mounted = false); // eslint-disable-line
  }, []);

  const parsedData =
    responses.length > 0 ? (
      responses.map((response) => (
        <div key={response.id} className="card">
          <div className="cardheader">
            <p>{response.name}</p>
          </div>
          <span className="left_text">{response.email}</span>
          <span className="right_text">
            <BookmarkIcon />
          </span>
        </div>
      ))
    ) : (
      <></>
    );

  return (
    <div>
      <h3 style={{ margin: '0px' }}>Major Stories Next Sprint:</h3>
      <div className="borderedbox">
        <Container
          parsedData={parsedData}
          autoPlaySpeed={2000}
          enableAutoPlay={enableAutoPlay}
          componentName="MajorStoriesNextSprint"
        />
      </div>
    </div>
  );
};

export default MajorStoriesNextSprint;
