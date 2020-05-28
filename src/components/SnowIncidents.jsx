import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StickyHeadTable from './StickyHeadTable';
import allActions from '../actions';

const SnowIncidents = () => {
  const getData = useSelector((state) => state.snowIncidents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.fetchSnowIncidents());
  }, []);

  const tableName = 'Incidents(SNOW):';
  const showHide = getData && getData.status === 200;
  const returnedTableData = showHide ? (
    getData.data.map((response) => (
      <tr>
        <td>
          <a href={response.url} target="_blank" rel="noopener noreferrer">
            {response.incident_number}
          </a>
        </td>
        <td>{response.short_description}</td>
        <td>{response.assignment_group}</td>
      </tr>
    ))
  ) : (
    <></>
  );

  const tableHeaderDetails = (
    <>
      {' '}
      <th>INC Number</th> <th>Short Desc</th> <th>Assignment Group</th>
    </>
  );
  return (
    <StickyHeadTable
      returnedTableData={returnedTableData}
      tableHeaderDetails={tableHeaderDetails}
      tableName={tableName}
    />
  );
};

export default SnowIncidents;
