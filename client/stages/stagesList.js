import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import StagesListItem from './stagesListItem';

const style = {
  'backgroundColor': 'grey',
  width: '100px',
  height: '100px',
  'cursor': 'pointer',
  'border': '2px solid black',
  overflow: 'hidden'
};

export default class StagesList extends Component {
  render() {
    const stageNames = ['Image Match', 'DP2', 'Color', 'Correction', 'Packaging', 'Printing', 'ID Laminate', 'Done', 'Invoiced'];
    if (this.props.tickets.length !== 0) {
      return(
        <div style={style}>
          <span></span>
          {this.props.children}
        </div>
      );
    } else {
      return(<div style={style}></div>)
    }
  }
}

StagesList.propTypes = {
  tickets: PropTypes.array.isRequired
};