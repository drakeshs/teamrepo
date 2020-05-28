/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StickyHeadTable from './StickyHeadTable';
import { fetchAlmDefects } from '../actions/fetchAlmDefectsAction';

class AlmDefects extends Component {
  componentDidMount() {
    this.props.fetchAlmDefects(); // eslint-disable-line
  }

  render() {
    const clickedFunction = (e) => {
      e.preventDefault();
      // This should go into a util file
      // let operatingSystem = navigator.platform;
      // let browserAgent = navigator.userAgent.indexOf("Chrome") !== 1;
      // if(!browserAgent){
      //   let shell = window.ActiveXObject("WScript.Shell");
      //   shell.run("Firefox http://www.google.com");
      // }else{
      //   alert("Can open only in IE, and should be dialogue/modal not alert");
      // }
    };

    const dataSize = 4;
    const { almdata } = this.props;
    const showHide = almdata && almdata.status === 200;
    const almData = showHide ? almdata.data.slice(0, dataSize) : null;
    const returnedTableData = showHide ? (
      almData.map((response) => (
        <tr key={response.id}>
          <td>
            <a href={response.url} onClick={(e) => clickedFunction(e)}>
              {response.defect_id}
            </a>
          </td>
          <td>{response.description}</td>
          <td>{response.assigne}</td>
          <td
            className={
              response.priority.toLowerCase() === 'high' ? 'redText' : null
            }>
            {response.priority}
          </td>
        </tr>
      ))
    ) : (
      <></>
    );
    const tableHeaderDetails = (
      <>
        <th>ID</th> <th>Description</th> <th>Assigne</th> <th>Priority</th>
      </>
    );
    return showHide ? (
      <StickyHeadTable
        returnedTableData={returnedTableData}
        tableHeaderDetails={tableHeaderDetails}
        tableName="Defects:"
      />
    ) : (
      <></>
    );
  }
}

const mapStateToProps = (state) => ({ almdata: state.almDefects });

export default connect(mapStateToProps, { fetchAlmDefects })(AlmDefects);
