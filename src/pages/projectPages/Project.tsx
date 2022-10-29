import React from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

function Project() {
  const { pathname } = useLocation();
  const [, , , child] = pathname.split('/')

  if (!child) { return (<Navigate to='sprint' />) }
  return (
    <>
      <div>
        <h1>
          Projects layout
        </h1>
      </div>
      <Outlet />
    </>
  );
}

export default Project;