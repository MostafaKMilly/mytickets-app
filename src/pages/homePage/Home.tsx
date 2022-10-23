import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
	console.log(process.env.REACT_APP_API_URI)
	const navigte = useNavigate()
	const id = Math.random() * 100
	return (
		<>
			<div>
				<Typography variant='h2' color={'primary'}>
					MY TICKETS APP HOMEPAGE
				</Typography>
				<Button color={'secondary'} onClick={() => navigte(`project/${id.toFixed(0)}`)}> create new project </Button>
			</div>
		</>
	);
}

export default Home;
