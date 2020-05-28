import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StickyHeadTable from './StickyHeadTable';
import allActions from '../actions';

const ScrComponent = () => {
  const getData = useSelector((state) => state.scrData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.fetchScrData());
  }, []);

  const showHide = getData && getData.status === 200;
  const tableName = 'SCR:';
  const returnedTableData = showHide ? (
    getData.data.map((response) => (
      <tr>
        <td>
          <a href={response.url} target="_blank" rel="noopener noreferrer">
            {response.scr_number}
          </a>
        </td>
        <td>
          {response.description},{response.date}
        </td>
      </tr>
    ))
  ) : (
    <></>
  );

  const tableHeaderDetails = (
    <>
      {' '}
      <th>SCR Number</th> <th>Desc, Date</th>
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

export default ScrComponent;
