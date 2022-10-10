import React from 'react';

function Root() {
  console.log(process.env.REACT_APP_API_URI)
  return (
    <div>
      MY TICKETS APP
    </div>
  );
}

export default Root;
