import React from 'react';
import { useParams } from 'react-router-dom';

function Sprint() {
  const {projectId} = useParams()
  return (
    <div> Sprint 1 of project #{projectId}</div>
  );
}

export default Sprint;