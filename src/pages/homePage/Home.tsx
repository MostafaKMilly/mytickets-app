import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  console.log(process.env.REACT_APP_API_URI)
  const navigte = useNavigate()
  const id = Math.random()*100
  return (
    <>
      <div>
        MY TICKETS APP HOMEPAGE
      </div>
      <button onClick={() =>navigte(`project/${id.toFixed(0)}`)}> create new project </button>
    </>
  );
}

export default Home;
