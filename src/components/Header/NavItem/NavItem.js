import React from 'react';
import { Link } from 'react-router-dom';

const navItem = (props) => (
    <a href="/" className={`link dim gray f6 ${props.header ? props.header : 'f5-ns'} dib mr3 helvetica`}>
      {props.children}
    </a>
);

export default navItem;