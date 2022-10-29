import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Sprint() {
	const navigate=useNavigate();
	function gobl(){
		navigate('../backlog')
	}
  const {projectId} = useParams()
  return (<>
    <div> Sprint 1 of project #{projectId}</div>
	<button onClick={gobl}>back log</button>
  </>
  );
}

export default Sprint;