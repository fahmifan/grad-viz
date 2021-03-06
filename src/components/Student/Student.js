import React from 'react';

import picture from '../../assets/profile_fahmi.jpg';

const student = (props) => (
  <section className="tc center pa2 relative">
    <article
      onClick={props.clicked} 
      className="hide-child relative ba b--black-10 mw4 center pointer dim helvetica br3 shadow-4 overflow-hidden">
    <div className="h-100">  
      <img 
        src={picture} 
        alt="Photo of John Doe" 
        className="db center mw-100 br--top br3 overflow-hidden" />
    </div>
      <div className="pa2 bt b--black-20 bg-white">
        <p className="f4 db link mv1 dark-blue hover-blue pointer">John Doe</p> 
        <p className="f5 gray mv1">140810160028</p>
      </div>
    </article>
  </section>
);

export default student;