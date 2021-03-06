import React, { Component }from 'react';
import { Route } from 'react-router-dom';

import Student from '../../components/Student/Student';

class Students extends Component {

  onClickHandler = (id) => {
    this.props.history.push(`/dashboard/${id}`)
  }

  render() {
    return (
      <div className="w-80 pa3 pa2-ns flex flex-wrap mt5 center">
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
      </div>
    );
  }
}

export default Students;