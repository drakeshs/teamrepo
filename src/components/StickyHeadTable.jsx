/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const StickyHeadTable = (props) => {
  const { tableName, tableHeaderDetails, returnedTableData } = props;
  return (
    <div style={{ marginLeft: '10px', float: 'left' }}>
      <h3 style={{ margin: '0px' }}>{tableName}</h3>
      <table style={{ width: '100%', height: '210px', textAlign: 'center' }}>
        <tr style={{ backgroundColor: '#DFDFDF' }}>
          {tableHeaderDetails || ''}
        </tr>
        {returnedTableData}
      </table>
    </div>
  );
};

StickyHeadTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default StickyHeadTable;
