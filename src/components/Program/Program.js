import React from 'react';

const Program = ( props ) => { // receive props 

  /*  Props are Object
      Props are read-only
      Props are used for receiving data from parent comp 
      Props can have children property 
  */
  console.log(props);

  return (
    <div className="card text-left mb-3">
      <div className="card-header">
        Featured
        <span className="badge bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary">Watch It Now</button>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
